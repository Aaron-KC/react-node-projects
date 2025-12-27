import React from 'react'
import './Topdeals.scss'

const Topdeals = ({ topDealUsers }) => {
  console.log(topDealUsers)
  return (
    <div className='top-deals'>
      <h2>Top Deals</h2>
      {
        topDealUsers.map(user => {
          return <div className="deal" key={user.id}>
            <div className="profile">
              <img src={user.img}/>
              <div>
                <h4>{user.username}</h4>
                <span>{user.email}</span>
              </div>
            </div>
            <h3>${user.amount}</h3>
          </div>
        })
      }
    </div>
  )
}

export default Topdeals
