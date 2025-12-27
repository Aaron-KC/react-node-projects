import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Buttons from '../components/Buttons'
import { axiosIns } from '../utils/Axios';
import { differenceInDays, format } from 'date-fns';


const Bookings = () => {
  let subCat = 'bookings'
  const [bookings, setBookings] = useState([])

  const generateClasses = (type) => {
    let classes = 'flex px-6 py-2 gap-1 rounded-full items-center '

    if (type === subCat) {
      classes += 'bg-primary text-white'
    } else {
      classes += 'bg-gray-200'
    }
    return classes;
  }

  useEffect(() => {
    axiosIns.get('/getbookingsbyuser')
      .then(({ data }) => {
        setBookings(data)
      })
      .catch(e => console.log(e))
  }, [])
  console.log(bookings)
  return (
    <div>
      <Buttons generateClasses={generateClasses} />
      <div className='py-3'>
        {
          bookings.length > 0 && bookings.map(booking => {
            return <Link to={'/account/booking/' + booking._id} state={booking} className='px-2 py-5 flex gap-3 bg-gray-200 rounded-lg cursor-pointer' key={booking._id}>
              <div className='w-32 h-32 flex'>
                <img src={"http://localhost:5001/uploads/" + booking?.place.photos?.[0]} alt="" className='object-cover' />
              </div>
              <div className='flex-1 flex flex-col gap-3'>
                <h1 className='text-lg font-semibold'>{booking?.place?.title}</h1>
                <p className='text-gray-500 text-lg'><span>{differenceInDays(new Date(booking.checkOut), new Date(booking.checkIn))} </span>
                  nights: {format(new Date(booking.checkIn), 'yyyy-MM-dd')} to {format(new Date(booking.checkOut), 'yyyy-MM-dd')}</p>
                <p className='text-xl'>Total Price: $ {booking.price}</p>
              </div>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Bookings
