const mysql = require('mysql2')

exports.db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DATABASE_KEY,
  database: 'social'
})

