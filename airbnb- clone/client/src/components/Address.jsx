import React from 'react'

const Address = ({place}) => {
  return (
    <div className='flex flex-col gap-2 w-full mx-auto'>
      <h1 className='text-2xl'>{place?.title}</h1>
      <a href={"https://maps.google.com/?q=" + place?.address} target='_blank' className='underline flex items-center font-normal'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        {place?.address}
      </a>
    </div>
  )
}

export default Address
