const Booking = require('../Model/BookingModel')
const jwt = require('jsonwebtoken')

exports.addNewBooking = async (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, process.env.SECRET, async (err, user) => {
    if(err) {
      console.log(err)
      return res.status(400).json('Something Went Wrong!')
    }
    const {place, checkIn, checkOut, maxGuests, name, phoneNumber, price} = req.body

    const booking = await Booking.create({place, checkIn, checkOut, maxGuests: Number(maxGuests), name, phoneNumber: Number(phoneNumber), user: user.userId, price})

    if(!booking) return res.status(400).json('Something Went Wrong!')

    res.json(booking)
  })
}

exports.getBookingsByUser = async (req, res) => {
  const {token} = req.cookies;

  jwt.verify(token, process.env.SECRET, async (err, user) => {
    const booking = await Booking.find({user: user.userId}).populate('place')

    if(!booking) return res.status(400).json('Something Went Wrong!')

    res.json(booking)
  })
}