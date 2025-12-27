const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => console.log('CONNECTED TO DATABASE SUCCESSFULLY!'))
  .catch(err => console.log(err))