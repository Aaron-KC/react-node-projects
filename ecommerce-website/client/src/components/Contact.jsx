import React from 'react'
import { FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import { RiFacebookBoxFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className='py-6'>
    <div className='flex justify-evenly bg-[#2879fe] py-4 text-white items-center'>
      <p className='text-sm'>BE IN TOUCH WITH US</p>
      <div className='flex'>
        <input type="text" placeholder='Enter your e-mail' className='ps-1 py-1 outline-0 text-black text-sm' />
        <button className='bg-black px-2 text-xs'>JOIN US</button>
      </div>
      <div className="icons flex gap-3">
        <RiFacebookBoxFill />
        <FaInstagram />
        <FaTwitter />
        <FaGoogle />
      </div>
    </div>

    </div>
  )
}

export default Contact
