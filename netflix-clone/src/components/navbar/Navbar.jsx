import React, { useState } from 'react'
import { FaBell } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import './navbar.scss'
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.scrollY > 0? true: false)
    return () => {
      window.onscroll = null
    }
  }
  return (
    <header>
      <div className={isScrolled? "navbar black" : "navbar"}>
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
          <div className="links">
            <li>Home</li>
            <li>Series</li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My List</li>
          </div>
        </div>
        <div className="right">
        <IoSearch className='icon'/>
        <span>KID</span>
        <FaBell className='icon' />
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <div className="profile">
        <IoMdArrowDropdown className='dropdownicon'/>
        <div className="dropdown">
          <div>Settings</div>
          <div>Logout</div>
        </div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
