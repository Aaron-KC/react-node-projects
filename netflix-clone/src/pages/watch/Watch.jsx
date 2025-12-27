import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import './watch.scss'

const Watch = () => {
  return (
    <>
    <div className='video-container'>
      <video src="https://samplelib.com/lib/preview/mp4/sample-10s.mp4" autoPlay controls></video>
    <div className="home">
      <FaArrowLeft />
      <span>Home</span>
    </div>
    </div>
    </>
  )
}

export default Watch
