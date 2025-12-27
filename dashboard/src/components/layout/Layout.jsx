import React from 'react'
import './Layout.scss'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className="content">
        <div className='sidebar-outer'>
        <Sidebar />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
