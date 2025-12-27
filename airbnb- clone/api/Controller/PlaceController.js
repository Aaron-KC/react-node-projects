const Place = require('../Model/PlaceModel');
const jwt = require('jsonwebtoken')

exports.addPlace = async (req, res) => {
  const {token} = req.cookies;
  const {title,address, photos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price} = req.body;
  jwt.verify(token, process.env.SECRET, async (err, user) => {
    const place = await Place.create({user: user.userId, 
      title,address, photos, description,price,perks, extraInfo, checkIn, checkOut, maxGuests: Number(maxGuests)
    });
    if(!place) {
      return res.status(400).json({error: 'Something Went Wrong'})
    }
    res.send(place)
  })
}

exports.getAllPlaces = async (req, res) => {
  const places = await Place.find()

  if(!places) return res.status(400).json({error: 'Something Went Wrong'})

  res.json(places)
}

exports.getPlaceDetails = async (req, res) => {
  const place = await Place.findById(req.params.id)

  if(!place) return res.status(400).json('Something Went Wrong!')

  res.json(place)
}

exports.getPlaceByUser = (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, process.env.SECRET, async (err, user)=> {
    if(err) return res.status(400).json('Token expired or may have been invalid!');
    const places = await Place.find({user: user.userId})
    if(!places) {
      return res.status(400).json('Places Not found');
    }
    res.send(places);
  })
}

exports.updatePlace = async (req, res) => {
  const {title,address, photos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price} = req.body;

  const updatedPlace = await Place.findByIdAndUpdate(req.params.id, {title,address, photos, description,price ,perks, extraInfo, checkIn, checkOut, maxGuests}, {recursive: true} );

  if(!updatedPlace) return res.status(400).json('Something Went Wrong!')

  res.send(updatedPlace)
}