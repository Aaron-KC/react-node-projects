const multer = require('multer'); 
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dstn = 'uploads/'
    cb(null, dstn)
  },
  filename: function (req, file, cb) {
    const base = path.basename(file.originalname);
    const ext = path.extname(file.originalname, base);
    const uniqueSuffix = base +  Date.now() + '-' + Math.round(Math.random() * 1E9) + ext;
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

module.exports = upload;