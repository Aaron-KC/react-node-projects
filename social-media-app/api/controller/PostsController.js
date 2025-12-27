const { db } = require("../connection/Database")
const jwt = require('jsonwebtoken')
const moment = require('moment')

exports.getAllPosts = (req, res) => {
  const token = req.cookies.access_token
  if(!token) return res.status(400).json('You need to Login first!')

  jwt.verify(token, 'socialMedia', (err,data)=> {
    if(err) return res.status(401).json('token invalid!')
    
      const q = 'SELECT * FROM posts AS p JOIN users AS u ON (u.id = p.userId) JOIN relationships AS r ON (r.followedUserId = p.userId) WHERE r.followerUserId = ? OR p.userID = ?'
    
      db.query(q,[data.id, data.id] ,(err,data)=> {
        if(err) return res.status(400).json('Something Went Wrong!')
        res.json(data)
      })
  })
}

exports.createPost = async (req, res) => {
  const token = req.cookies.access_token

  if(!token) return res.status(401).json('You need to Login First!')

  jwt.verify(token, 'socialMedia', (err,data) => {
    if(err) return res.status(401).json('Token Invalid or May have expired')

    const q = "INSERT INTO `posts` (`desc`, `img`, `userId`, `createdAt`) VALUES (?)"

    const values = [req.body.desc, req.body.img, data.id, moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")]

    db.query(q, [values], (err, data) => {
      if(err) return res.status(400).json('Something Went Wrong!')

      res.json('Post created Successfully!')
    })
  })

}