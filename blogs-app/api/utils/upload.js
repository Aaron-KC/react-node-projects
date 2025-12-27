const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dstn = '../client/public/uploads'
    if(!fs.existsSync(dstn)) {
      fs.mkdirSync(dstn, {recursive: true})
    }
    cb(null, dstn)
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const base = path.basename(file.originalname, ext)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, base + '-' + uniqueSuffix + ext)
  }
})

const upload = multer({ storage: storage })

module.exports = upload