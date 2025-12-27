import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="info">
        <img src="/userIcon.svg" alt="" />
        <span>Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className='noti'>
        <img src="/notifications.svg" alt="" />
        <span>1</span>
        </div>
        <div className="profile">
          <img src="/noavatar.png" alt="" />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar
