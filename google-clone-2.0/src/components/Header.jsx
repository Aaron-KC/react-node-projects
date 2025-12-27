import React, { useContext, useState } from 'react'
import { FcSearch } from "react-icons/fc";
import { FaMoon } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

const Header = () => {
  const links = [
    { url: '/', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/image', text: '📸 Images' },
    { url: '/video', text: '📺 Videos' },
  ];
  const {darkMode, setDarkMode, handleSearch} = useContext(MyContext)
  const {pathname} = useLocation()
  const [input, setInput] = useState('')
  return (
    <>
    <div className='flex flex-col md:flex-row items-center justify-between bg-gray-100 dark:bg-gray-900 p-2'>
      <div className='bg-blue-500 flex font-bold text-white items-center text-lg gap-1 p-1 rounded-sm dark:bg-gray-500 dark:text-black'>
        Google <FcSearch />
      </div>
      <div className='w-full md:ps-48 flex justify-center md:justify-start items-center gap-2'>
        <div className='w-auto relative'>
        <input type="search" className='my-2 md:my-0 ps-4 pe-11 py-2 w-[350px] mx-auto md:mx-0 rounded-full outline-none' placeholder='Search' onChange={(e) => setInput(e.target.value)} value={input} />
        <IoSearch className='text-2xl absolute md:right-3 md:top-2 top-4 right-2 cursor-pointer' onClick={() => handleSearch(input)}/>
        </div>
      </div>
      <div className='my-2 md:my-0'>
        <button onClick={(() => setDarkMode(!darkMode))} className='px-2 py-1 bg-white rounded-full flex items-center gap-1 mx-auto md:mx-0'>
          {darkMode ? <>Light <FaLightbulb className='text-yellow-500' /></> : <>Dark <FaMoon className='text-yellow-500' /></>}
        </button>
      </div>
    </div>
    <div className='flex flex-col md:flex-row items-center justify-between bg-gray-100 dark:bg-gray-900 p-2 border-gray-200 border-b-[1px] dark:border-gray-700 md:ps-72'>
      <div>
      {
        links.map((link, i) => {
          return <Link to={link.url} key={i} className={pathname == link.url? 'ms-5 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2': 'ms-5 dark:text-blue-300'}>{link.text}</Link>
        })
      }
      </div>
    </div>
    </>
  )
}

export default Header
