const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  }, 
  description: {
    type: String,
    required: true
  }, 
  img: {
    type: String
  }, 
  category: {
    type: String,
    required: true
  }, 
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema)