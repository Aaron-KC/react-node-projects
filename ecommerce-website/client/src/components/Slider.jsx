import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
const Slider = () => {
  const [index, setIndex] = useState(0)

  const decreaseIndex = () => {
    setIndex((prev) => prev - 1)
  }

  const increaseIndex = () => {
    setIndex((prev) => prev + 1)
  }
  return (
    <div className='slider bg-red-300 overflow-hidden relative'>
      <div className='h-full min-w-[300vw] grid grid-cols-3 transition-transform duration-1000' style={{ transform: `translateX(-${index * 100}vw)` }}>
        <img src={data[0]} alt="" className='h-full w-full object-cover' />
        <img src={data[1]} alt="" className='h-full w-full object-cover' />
        <img src={data[2]} alt="" className='h-full w-full object-cover' />
      </div>
      <div className='absolute w-[fit-content] flex z-20 left-0 right-0 bottom-20 m-auto gap-3'>
        {
          index > 0 && <span className='p-3 border-gray-400 border-solid border-2 cursor-pointer' onClick={decreaseIndex}>
            <FaArrowLeft />
          </span>
        }
        {
          index < 2 && <span className='p-3 border-gray-400 border-solid border-2 cursor-pointer' onClick={increaseIndex}>
            <FaArrowRight />
          </span>
        }

      </div>
    </div>
  )
}

export default Slider
