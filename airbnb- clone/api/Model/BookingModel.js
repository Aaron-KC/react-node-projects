const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const bookingSchema = new mongoose.Schema({
  place: {
    type: ObjectId,
    required: true,
    ref: 'Place'
  }, 
  user: {
    type: ObjectId, 
    required: true,
    ref: 'User'
  }, 
  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number, 
    required: true
  }
}, {timeStamps: true})

const bookingModel = mongoose.model('Booking', bookingSchema)

module.exports = bookingModel