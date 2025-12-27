import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='py-7 px-2 h-[80vh] w-full flex gap-2 flex-wrap'>
      <div className='flex-1 h-full overflow-hidden flex flex-col gap-2'>
        <div className='w-full h-1/2 relative'>
          <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
          <button className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gray-300 px-5 py-2 hover:bg-[#2879fe] hover:text-white text-sm'>SALE</button>
        </div>
        <div className='w-full h-1/2 relative'>
          <Link to={'/products/2'}>
            <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
            <button className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gray-300 px-5 py-2 hover:bg-[#2879fe] hover:text-white text-sm'>WOMEN</button>
          </Link>
        </div>
      </div>
      <div className='flex-1 h-full relative'>
        <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
        <button className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gray-300 px-5 py-2 hover:bg-[#2879fe] hover:text-white text-sm'> NEW SEASON</button>

      </div>
      <div className='flex-[2] h-full flex flex-col gap-2 overflow-hidden'>
        <div className='flex w-full h-1/2 gap-2'>
          <div className='w-1/2 h-full relative'>
            <Link to={'/products/1'}>
              <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
              <button className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gray-300 px-5 py-2 hover:bg-[#2879fe] hover:text-white text-sm'>MEN</button>
            </Link>
          </div>
          <div className='w-1/2 h-full relative'>
            <img src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
            <button className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gray-300 px-5 py-2 hover:bg-[#2879fe] hover:text-white text-sm'>ACCESSORIES</button>
          </div>
        </div>
        <div className='w-full h-1/2 relative'>
          <img src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
          <button className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gray-300 px-5 py-2 hover:bg-[#2879fe] hover:text-white text-sm'>SHOES</button>
        </div>
      </div>
    </div>
  )
}

export default Categories
