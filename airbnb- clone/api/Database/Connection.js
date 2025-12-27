const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE)
.then(() => console.log('CONNECTED TO DATABASE SUCCESSFULLY!'))
.catch(e => console.log(e));