import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoCartOutline, IoSearch } from 'react-icons/io5'
import { MdOutlinePerson } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import CartItems from './CartItems'
import { useDispatch, useSelector } from 'react-redux'
import { RESET_CART } from '../redux/cartSlice'

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)
  const cartItems = useSelector(store => store.cart.cartItems)
  const itemsLength = cartItems.length > 0? cartItems.length: 0;
  const dispatch = useDispatch()

  const handleClick = () => {
    setIsClicked((prev) => !prev)
  }
  if(cartItems.length > 0) {
    const amounts = cartItems?.map(cartItem => (Number(cartItem.price) * cartItem.quantity))
    var total = (amounts?.reduce((acc, curr) => acc + curr)).toFixed(2)
  }
  return (
    <div className='relative'>
      <div className='flex justify-between px-7 py-1 items-center h-[65px]'>
        <div className='flex justify-between items-center gap-2'>
          <div className='flex items-center'>
            <img src="/en.png" />
            <RiArrowDropDownLine className='text-2xl text-bold cursor-pointer' />
          </div>
          <div className='flex items-center'>
            <span>USD</span>
            <RiArrowDropDownLine className='text-2xl text-bold cursor-pointer' />
          </div>
          <Link to={'/products/1'}>Women</Link>
          <Link to={'/products/2'}>Men</Link>
          <Link to={'/products/3'}>Children</Link>
        </div>
        <div>
          <Link to={'/'} className='text-xl tracking-wide font-medium'>AARON'S STORE</Link>
        </div>
        <div className='flex gap-3'>
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/'}>Contact</Link>
          <Link to={'/'}>Stores</Link>
          <div className='flex items-center gap-2'>
            <IoSearch className='text-gray-600 text-lg' />
            <MdOutlinePerson className='text-gray-600 text-lg' />
            <IoMdHeartEmpty className='text-gray-600 text-lg' />
            <div className='relative cursor-pointer' onClick={handleClick}>
              <IoCartOutline className='text-gray-600 text-lg' />
              <span className='absolute bg-[#2879fe] text-white h-[20px] w-[20px] rounded-full flex justify-center items-center right-[-10px] top-[-12px] text-xs'>{itemsLength}</span>
            </div>
          </div>
        </div>
      </div>
      {
        isClicked && <div className='absolute top-[70px] right-1 z-[99] flex flex-col w-[25%] py-4 px-2 bg-white rounded-sm'>
          <h1 className='text-xl text-gray-500'>Products in your cart</h1>
          {
            cartItems.length > 0 && cartItems.map(cartItem => <CartItems cartItem={cartItem}/>)
          }
          <div className='flex justify-between font-semibold py-3'>
            <p>SUBTOTAL</p>
            <p>${total? total: 0}</p>
          </div>
          <button className='bg-[#2879fe] py-2 px-12 items-center text-white gap-3 text-sm w-fit'>PROCEED TO CHECKOUT</button>
          <button className='text-red-500 mt-2 w-fit' onClick={() => dispatch(RESET_CART())}>Reset Cart</button>
        </div>
      }
    </div>
  )
}

export default Navbar
