const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const placeSchema = new mongoose.Schema({
  title: {type: String},
  user: {type: ObjectId, ref: 'User'},
  address: {type: String},
  photos: {
    type: [String]
  },
  price: {type: Number},
  description: {type: String},
  perks: {type: [String]},
  extraInfo: {type: String},
  checkIn: {type: String},
  checkOut: {type: String},
  maxGuests: {type: Number}
}, {timestamps: true})

const placeModel = mongoose.model('Place', placeSchema)

module.exports = placeModel