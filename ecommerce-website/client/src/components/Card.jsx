import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className='h-[450px] w-[230px] relative m-1'>
        {
          item.isNew && <span className='absolute top-1 left-1 px-2 py-1 border-none bg-white text-[#2879fe] text-sm z-30'>New Season</span>
        }
        <div className='group'>
        <img src={import.meta.env.VITE_BASEURL +  item?.img2?.url} className='h-5/6 w-[260px] object-cover absolute top-0 left-0 z-10' />
        <img src={import.meta.env.VITE_BASEURL +  item?.img1?.url} className='h-5/6 w-[260px] object-cover absolute top-0 left-0 group-hover:z-20 transition-all duration-500' />
        </div>
        <div className='absolute w-[280px] bottom-5'>
        <p>{item?.title}</p>
        <div className='mt-1'>
          <span className='text-gray-600 text-xs me-4' style={{ textDecoration: 'line-through' }}>${item?.oldPrice || Number(item?.price) + 20}</span>
          <span className='font-medium text-md'>${item?.price}</span>
        </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
