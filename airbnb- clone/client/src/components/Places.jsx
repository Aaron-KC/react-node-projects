import React, { useEffect, useState } from 'react'
import { axiosIns } from '../utils/Axios'
import { Link } from 'react-router-dom'

const Places = () => {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    axiosIns.get('/getplacesbyuser')
    .then(({data}) => {
      setPlaces(data)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div className='py-3'>
      {
        places.length > 0 && places.map(place => {
         return <Link to={'/account/accomodations/'  + place._id} state={place} className='px-2 py-5 flex gap-3 bg-gray-200 rounded-lg cursor-pointer' key={place._id}>
          <div className='w-40 h-40 flex'>
            <img src={"http://localhost:5001/uploads/" + place.photos?.[0]} alt="" className='object-cover'/>
          </div>
          <div className='flex-1 flex flex-col gap-3'>
            <h1 className='text-lg font-semibold'>{place.title}</h1>
            <p>{place.description}</p>
          </div>
        </Link>
        })
      }
    </div>
  )
}

export default Places
