import React from 'react'

const Footer = ({handleShow, data}) => {
  return (
    <footer>
      <div className="bg-gradient"></div>
      <div className="heading">
        <p>APOD PROJECT</p>
        <h1>{data?.title}</h1>
      </div>
      <button onClick={handleShow}>
        <i className="bi bi-info-circle-fill"></i>
      </button>
    </footer>
  )
}

export default Footer
