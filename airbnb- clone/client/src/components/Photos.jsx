import React from 'react'

const Photos = ({place, setShowPhotos}) => {
  return (
    <div className='md:flex gap-2 rounded-3xl overflow-hidden h-[500px] w-full mt-2 relative'>
      <div className='flex-[2] h-full'>
        <img src={'http://localhost:5001/uploads/' + place?.photos?.[0]} className='w-full aspect-square object-cover h-full cursor-pointer' onClick={() => setShowPhotos(true)} />
      </div>
      <div className='flex-1 flex flex-col gap-2 h-full'>
        <div className='h-1/2'>
          <img src={'http://localhost:5001/uploads/' + place?.photos?.[1]} className='w-full aspect-square object-cover h-full cursor-pointer' onClick={() => setShowPhotos(true)} />
        </div>
        <div className='overflow-hidden h-1/2'>
          <img src={'http://localhost:5001/uploads/' + place?.photos?.[2]} className='w-full aspect-square object-cover h-full cursor-pointer' onClick={() => setShowPhotos(true)} />
        </div>
      </div>
      <button className='absolute bottom-2 right-2 bg-white rounded-xl px-3 py-1 flex gap-1 items-center hover:opacity-90 cursor-pointer' onClick={() => setShowPhotos(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        Show more photos</button>
    </div>
  )
}

export default Photos
