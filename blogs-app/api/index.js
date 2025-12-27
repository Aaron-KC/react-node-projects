const express = require('express')
require('dotenv').config()
require('./connection/Database')
const cors = require('cors')
const upload = require('./utils/upload')

const app = express()
const userRoute = require('./route/UserRoute')
const postRoute = require('./route/PostRoute')


app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
  })
);
app.use('/api/user', userRoute)
app.use('/api/posts', postRoute)

app.post('/api/posts/upload', upload.single('file'), (req, res) => {
  res.json(req.file?.filename)
})



app.listen('5001', () => {
  console.log('SERVER CONNECTED SUCCESSFULLY')
})