import React, { useContext } from 'react'
import { IoHomeOutline, IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlinePerson, MdOutlineWindow } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegEnvelope } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';
import { DarkContext } from '../context/darkContext';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const {darkMode, handleDarkMode} = useContext(DarkContext)
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='px-3 py-2 bg-white dark:bg-[#222] w-full h-[50px] sticky top-0 border border-lightgray dark:border-[#444] z-40'>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center dark:text-[whitesmoke]">
          <span className='text-xl font-semibold'>Our Socials.</span>
          <IoHomeOutline />
          {
            darkMode?  <IoSunnyOutline onClick={handleDarkMode} className='cursor-pointer'/> : <IoMoonOutline onClick={handleDarkMode} className='cursor-pointer'/>
          }
          <MdOutlineWindow />
          <div className='w-[500px] relative'>
            <input type="search" placeholder='Search' className='w-full outline-none ps-7 pe-3 py-1 border border-[#d3d3d3] dark:border-[#444] rounded-md bg-transparent' />
            <IoIosSearch className='absolute left-1 top-2 text-lg font-semibold' />
          </div>
        </div>
        <div className='flex gap-5 items-center dark:text-[whitesmoke]'>
          <MdOutlinePerson />
          <FaRegEnvelope />
          <FiBell />
          <div className='flex gap-1 items-center'>
            {
              currentUser?.img && <img src={currentUser?.img} className='h-[25px] w-[25px] rounded-full object-fit' />
            }
            <span className='text-md'>{currentUser?.username}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
