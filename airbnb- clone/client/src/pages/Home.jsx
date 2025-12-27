import React, { useEffect, useState } from 'react'
import { axiosIns } from '../utils/Axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    axiosIns.get('/getallplaces')
      .then(res => {
        setPlaces(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [])

  console.log(places)

  return (
    <div className='py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        places.length > 0 && places.map(place => {
          return <Link to={'/place/' + place._id} key={place._id} className='flex flex-col'>
            <div className='h-80 w-80 rounded-3xl overflow-hidden'>
              <img src={'http://localhost:5001/uploads/' + place.photos?.[0]} className='w-full h-full object-cover' />
            </div>
            <div>
              <h1 className='font-bold text-lg'>{place.address}</h1>
              <p className='text-gray-500 text-sm truncate -mt-1'>{place.title}</p>
            </div>
            <h1 className='font-bold'>${place.price}</h1>

          </Link>
        })
      }
    </div>
  )
}

export default Home
