import React from 'react'
import './Sidebar.scss'
import { menu } from '../../data'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {
        menu.map(item => {
          return <div className="item" key={item.id}>
            <h5>{item.title}</h5>
            <div className='listItems'>
              {
                item.listItems.map(item => {
                  return <div className="list">
                    <Link to={item.url} key={item.id} className='link'>
                      <img src={'/' + item.icon} alt="" />
                      <span>{item.title}</span>
                    </Link>
                  </div>
                })
              }
            </div>

          </div>
        })
      }
    </div>
  )
}

export default Sidebar
