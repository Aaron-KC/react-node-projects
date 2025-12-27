import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='flex justify-evenly w-full gap-[40px] md:px-[150px] flex-wrap'>
        <div className="flex flex-col flex-1">
          <h1 className='text-md font-medium'>Categories</h1>
          <span className='text-sm text-gray-600'>Women</span>
          <span className='text-sm text-gray-600'>Men</span>
          <span className='text-sm text-gray-600'>Shoes</span>
          <span className='text-sm text-gray-600'>Accessories</span>
          <span className='text-sm text-gray-600'>New Arrivals</span>
        </div>
        <div className="flex flex-col flex-1 flex-wrap">
          <h1 className='text-md font-medium'>Links</h1>
          <span className='text-sm text-gray-600'>FAQ</span>
          <span className='text-sm text-gray-600'>Pages</span>
          <span className='text-sm text-gray-600'>Stores</span>
          <span className='text-sm text-gray-600'>Compare</span>
          <span className='text-sm text-gray-600'>Cookies</span>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <h1 className='text-md font-medium'>About</h1>
          <p className='text-sm text-gray-600 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi excepturi maiores assumenda exercitationem rerum ullam molestias impedit commodi nesciunt deleniti accusantium tempora dolore</p>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <h1 className='text-md font-medium'>Contact</h1>
          <p className='text-sm text-gray-600 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi excepturi maiores assumenda exercitationem rerum ullam molestias impedit commodi nesciunt deleniti accusantium tempora dolore</p>
        </div>
      </div>
      <div className='flex justify-evenly py-9 items-center flex-wrap'>
        <div className='flex gap-3 items-center'>
          <h1 className='text-[#2879fe] font-bold'>Aaron's Store</h1>
          <p className='text-xs text-gray-600'>&copy;Copyright 2024. All Rights Reserved</p>
        </div>
        <img src="/payment.png" alt="" className='h-[50px]'/>
      </div>
    </>
  )
}

export default Footer
