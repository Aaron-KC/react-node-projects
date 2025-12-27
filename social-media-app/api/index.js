const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const authRouter = require('./routes/AuthRoute')
const postsRouter = require('./routes/PostRoute')
const upload = require('./utils/upload')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true)
  next()
})
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)
app.post('/api/upload', upload.single('file'), (req, res) => {
  const filename = req.file?.filename
  console.log(filename)
  return res.json(filename)
})

app.listen(5001, () => {
  console.log('CONNECTED TO API')
})