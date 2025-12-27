const { addPlace, getPlaceByUser, updatePlace, getAllPlaces, getPlaceDetails } = require('../Controller/PlaceController')

const router = require('express').Router()

router.post('/addplace', addPlace)
router.get('/getallplaces', getAllPlaces)
router.get('/getplacedetails/:id', getPlaceDetails)
router.get('/getplacesbyuser', getPlaceByUser)
router.put('/updateplace/:id', updatePlace)

module.exports = router