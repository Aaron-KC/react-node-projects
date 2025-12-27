import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Address from '../components/Address'
import Photos from '../components/Photos'
import { differenceInDays, format } from 'date-fns'

const Booking = () => {
  const { state } = useLocation()
  const [showPhotos, setShowPhotos] = useState(false)

  if (showPhotos) {
    return (<div className='absolute left-0 top-0 min-h-screen min-w-full bg-black w-screen'>
      <div className='flex gap-4 w-3/4 mx-auto flex-col relative'>
        <h1 className='text-white text-2xl py-6'>Photos of {state?.place?.title}</h1>
        <button className='fixed bg-gray-400 top-6 right-48 px-3 py-1 rounded-xl flex gap-1 items-center cursor-pointer' onClick={() => setShowPhotos(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          Close photos</button>
        {
          state?.place?.photos?.length > 0 && state?.place.photos.map(photo => {
            return <div className='w-full min-h-[500px] bg-black'>
              <img src={"http://localhost:5001/uploads/" + photo} className='w-full h-full object-cover' />
            </div>
          })
        }
      </div>
    </div>)
  }
  return (
    <div className='bg-gray-100 -mx-4 px-4 py-6 w-screen'>
      <div className='mx-auto w-3/4'>
        <Address place={state.place} />
        <div className='px-4 pt-8 pb-4 flex gap-3 bg-gray-200 rounded-lg cursor-pointer w-full my-5 justify-between'>
          <div className='w-full h-full flex items-center'>
            Your booking Information: <br />
            {differenceInDays(new Date(state?.checkOut), new Date(state?.checkIn))} nights <br />
            {format(new Date(state?.checkIn), 'yyyy-MM-dd')} to {format(new Date(state?.checkOut), 'yyyy-MM-dd')}
            {
              differenceInDays(state?.checkIn, new Date()) < 0 && <span className='text-red-700 text-xl font-semibold'>Your Booking Has Been expired</span>
            }
          </div>
          <button className='bg-primary text-white px-6 py-1 font-bold rounded-lg'>
            total price <br /> <span className='text-xl'>$ {state.price}</span>
          </button>
        </div>
        <Photos place={state.place} setShowPhotos={setShowPhotos}/>
      </div>
    </div>
  )
}

export default Booking
