import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosIns } from '../utils/Axios'
import { differenceInDays } from 'date-fns';
import Address from '../components/Address';
import Photos from '../components/Photos';

const Place = () => {
  const { id } = useParams()
  const [place, setPlace] = useState({})
  const navigate = useNavigate()
  const [showPhotos, setShowPhotos] = useState(false)
  const [booking, setBooking] = useState({
    checkIn: '',
    checkOut: '',
    maxGuests: 0,
    name: '',
    phoneNumber: 0
  })

  
  const handleChange = e => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }
  
  useEffect(() => {
    axiosIns.get('/getplacedetails/' + id)
    .then(res => {
      setPlace(res.data)
    })
    .catch(e => console.log(e))
  }, [])
  
  
  if (showPhotos) {
    return (<div className='absolute left-0 top-0 min-h-screen min-w-full bg-black w-screen'>
      <div className='flex gap-4 w-3/4 mx-auto flex-col relative'>
        <h1 className='text-white text-2xl py-6'>Photos of {place?.title}</h1>
        <button className='fixed bg-gray-400 top-6 right-48 px-3 py-1 rounded-xl flex gap-1 items-center cursor-pointer' onClick={() => setShowPhotos(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          Close photos</button>
        {
          place?.photos?.length > 0 && place.photos.map(photo => {
            return <div className='w-full min-h-[500px] bg-black'>
              <img src={"http://localhost:5001/uploads/" + photo} className='w-full h-full object-cover' />
            </div>
          })
        }
      </div>
    </div>)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    
    axiosIns.post('/addnewbooking', {...booking, price: Number(calculatePrice()), place: id})
    .then(res => {
      navigate('/account/bookings')
    })
    .catch(e => console.log(e))
  }
  
  const calculatePrice = () => {
    return differenceInDays(new Date(booking.checkOut), new Date(booking.checkIn)) * place?.price
  }
  
  console.log({...booking, place: id, price: calculatePrice()})
  
  return (
    <div className='bg-gray-100 -mx-4 px-4 py-6 w-screen'>
      <div className='mx-auto w-3/4'>
        <Address place={place}/>
        <Photos place={place} setShowPhotos={setShowPhotos}/>
        <div className='lg:flex gap-3 py-3'>
          <div className='flex-[2] flex flex-col gap-3'>
            <div className='gap-2 font-medium'>
              <h1 className='text-2xl font-semibold'>Description</h1>
              <p className='leading-5 text-sm'>{place?.description}</p>
            </div>
            <div>
              <p className='leading-5 text-sm font-medium'>
                Check-In: {place?.checkIn}<br />
                Check-Out: {place?.checkOut}<br />
                Max number of guests: {place?.maxGuests}<br />
              </p>
            </div>
          </div>
          <div className='flex-1 px-4 py-3 bg-white rounded-xl shadow-md'>
            <h1 className='text-center font-medium pb-3'>Price: ${place?.price} / per night</h1>
            <div className='border rounded-lg'>
              <div className='flex'>
                <label className='flex flex-col border-r p-1'>
                  Check in:
                  <input type="date" onChange={handleChange} name='checkIn' value={booking.checkIn} />
                </label>
                <label className='flex flex-col p-1'>
                  Check Out:
                  <input type="date" onChange={handleChange} name='checkOut' value={booking.checkOut} />
                </label>
              </div>
              <label className='border-t flex flex-col px-2 py-3'>
                Number of guests:
                <input type="number" onChange={handleChange} name='maxGuests' value={booking.maxGuests} />
              </label>
              {
                booking.checkIn && booking.checkOut && <div className='flex flex-col px-1'>
                  <label className='flex flex-col border-r p-1 border-t py-3'>
                    Your Full Name
                    <input type="text" onChange={handleChange} name='name' value={booking.name} />
                  </label>
                  <label className='flex flex-col p-1 border-t py-3'>
                    Phone Number
                    <input type="tel" onChange={handleChange} name='phoneNumber' value={booking.phoneNumber} />
                  </label>
                </div>
              }
            </div>
            <button className='bg-primary w-full mt-4 text-white rounded-full py-1 text-sm font-semibold' onClick={handleSubmit}>Book this place {
                booking.checkIn && booking.checkOut && '$' +  calculatePrice()
              }
            </button>
          </div>
        </div>
        <div className='bg-white mt-4 py-3 px-2'>
          <h1 className='font-semibold pb-2'>Extra Info</h1>
          <p className='leading-5 text-sm font-medium'>IMPORTANT NOTICE: {place?.extraInfo}</p>
        </div>
      </div>
    </div>
  )
}

export default Place
