import React from 'react'

const Sidebar = ({handleShow, data}) => {
  return (
    <div className='sidebar-container'>
      <div className="bg-cover"></div>
      <div>
      <h1>{data?.title}</h1>
      <p className='date'>{data?.date}</p>
      <p>{data?.explanation}</p>
      </div>
      <div className="icon" onClick={handleShow}>
        <i className="bi bi-arrow-right"></i>
      </div>
    </div>
  )
}

export default Sidebar
