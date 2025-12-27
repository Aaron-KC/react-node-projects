const User = require('../Model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.register = async (req , res) => {
  const {username, email, password} = req.body

  const emailExists = await User.findOne({email});

  if(emailExists) return res.status(400).json({error: 'Email Already Exists! Choose Another One '});

  const saltRounds = await bcrypt.genSalt(Number(process.env.SALTROUNDS));
  const hashedPassword = await bcrypt.hash(password, Number(saltRounds));


  const user = await User.create({username, email, password: hashedPassword})

  if(!user) return res.status(400).json({error: 'Something Went Wrong!'});

  res.send({message: 'User Registered Successfully!'});
}

exports.login = async (req, res) => {
  const {email} = req.body;

  const emailExists = await User.findOne({email})

  if(!emailExists) return res.status(400).json({error: 'User Not Registered!'})

  const passwordIsCorrect = await bcrypt.compare(req.body.password, emailExists.password)

  if(!passwordIsCorrect) return res.status(400).json({error: "Password And Email do not Match!!"});

  const token = jwt.sign({
    userId: emailExists._id,
    username: emailExists.username
  }, process.env.SECRET)

  res.cookie('token', token).json({user: 
    {
      userId: emailExists._id,
      username: emailExists.username,
    }
  })
}

exports.signOut = (req, res) => {
  console.log('signOut Called');
  res.clearCookie('token');
  res.json('Signed Out Successfully!')
}