import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { DELETE_CART_ITEM } from '../redux/cartSlice';


const CartItems = ({ cartItem }) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className='w-full flex gap-2 py-3 items-center h-full'>
        <div className="w-2/4 p-2">
          <img src={import.meta.env.VITE_BASEURL + cartItem?.img2?.url} className='h-full max-h-28 w-full object-cover' />
        </div>
        <div className="right flex gap-2">
          <div className='flex flex-col gap-1'>
            <h3 className='text-md text-gray-600 font-medium'>{cartItem?.title}</h3>
            <p className='text-xs  text-gray-600'>{cartItem?.desc}</p>
            <p className='text-md text-gray-600'>{cartItem?.quantity} x ${cartItem?.price}</p>
          </div>
          <div className='flex items-center text-md ps-1 text-red-600 cursor-pointer'>
            <FaRegTrashCan onClick={() => dispatch(DELETE_CART_ITEM(cartItem.id))}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItems
