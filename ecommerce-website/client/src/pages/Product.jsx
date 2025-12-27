import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaBalanceScale } from 'react-icons/fa';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import UseFetch from '../utils/hooks/UseFetch';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../redux/cartSlice';


const Product = () => {
  const [img, setImg] = useState('img1')
  const [quantity, setQuantity] = useState(1)
  const id = useParams().productId
  const dispatch = useDispatch()

  const {items} = UseFetch(`/products?populate=*&filters[id][$eq]=${id}`)
  const item = items[0]
  return (
    <div className='product p-5 flex flex-wrap'>
      <div className='w-1/2 pe-5 flex gap-3 h-full'>
        <div className='flex-[1] h-full flex flex-col gap-3'>
          <img src={import.meta.env.VITE_BASEURL + item?.img1?.url} className='h-[100px] object-cover cursor-pointer' onClick={() => setImg('img1')} />
          <img src={import.meta.env.VITE_BASEURL + item?.img2?.url} className='h-[100px] object-cover cursor-pointer' onClick={() => setImg('img2')} />
        </div>
        <div className='flex-[5] h-full bg-red-900'>
          <img src={import.meta.env.VITE_BASEURL + (item && item[img]?.url)} className='object-cover w-full h-full' />
        </div>
      </div>
      <div className='w-1/2 flex flex-col gap-4 ps-3'>
        <h1 className='text-2xl font-bold'>{item?.title}</h1>
        <h1 className='text-xl text-blue-600 font-medium'>${item?.price}</h1>
        <p className='text-gray-500 text-sm font-[500]'>{item?.desc}</p>
        <div className='flex gap-2 items-center'>
          {
           <button className='bg-[#808080] text-xl px-5 py-2 text-white' onClick={() => setQuantity(quantity==1? 1: prev => prev - 1)}>-</button>
          }
          <span>{quantity}</span>
          <button  className='bg-[#808080] text-xl px-5 py-2 text-white' onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className='bg-[#2879fe] flex w-[fit-content] py-2 px-12 items-center text-white gap-3 text-sm' onClick={() => dispatch(ADD_TO_CART({...item, quantity}))}>
          <MdOutlineAddShoppingCart className='text-lg'/>
          ADD TO CART
        </button>
        <div className='flex gap-3 py-2'>
          <button className='flex w-[fit-content] items-center text-[#2879fe] gap-3 text-sm'><CiHeart className='text-lg'/> ADD TO WISH LIST</button>
          <button className='flex w-[fit-content] items-center text-[#2879fe] gap-3 text-sm'><FaBalanceScale className='text-lg'/> ADD TO COMPARE</button>
        </div>
        <div className="py-3 gap-2 flex flex-col">
          <p className='text-gray-400 text-sm font-[500]'>Vendor: Polo</p>
          <p className='text-gray-400 text-sm font-[500]'>Product Type: {item?.products[0]?.title}</p>
          <p className='text-gray-400 text-sm font-[500] pb-10 border-b-2 border-gray-300 mb-10'> Tag: {item?.products[0]?.title}, {item?.categories[0]?.title}</p>
          <p className='text-gray-400 text-xs font-[500] pb-3 border-b-2 border-gray-300 w-[fit-content]'>DESCRIPTION</p>
          <p className='text-gray-400 text-xs font-[500] pb-3 border-b-2 border-gray-300 w-[fit-content]'>ADDITIONAL INFORMATION</p>
          <p className='text-gray-400 text-xs font-[500] pb-3 border-b-2 border-gray-300 w-[fit-content]'>FAQ</p>
        </div>
      </div>
    </div>
  )
}

export default Product
