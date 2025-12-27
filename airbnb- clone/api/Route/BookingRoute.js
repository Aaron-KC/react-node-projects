const { addNewBooking, getBookingsByUser } = require('../Controller/BookingController')

const router = require('express').Router()

router.post('/addnewbooking', addNewBooking)
router.get('/getbookingsbyuser', getBookingsByUser)

module.exports = router