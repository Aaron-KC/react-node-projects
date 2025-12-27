import React from 'react'
import Navbar from './Navbar'
import LeftBar from './LeftBar'
import { Outlet } from 'react-router-dom'
import RightBar from './RightBar'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
     <Navbar />
     <div className='flex'>
        <LeftBar/>
        <Outlet />
        <RightBar />
      </div> 
      <Footer />
    </>
  )
}

export default Layout
