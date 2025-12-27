import React from 'react'
import './featured.scss'
import { FaPlay } from 'react-icons/fa'
import { IoInformationCircleOutline } from 'react-icons/io5'

const Featured = ({ genre }) => {
  return (
    <div className='featured'>
      <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <div className="feature-container">
        {
          genre && <>
            <div className="more">
              <h1>{genre == 'movies' ? 'Movies' : 'Series'}</h1>
              <select name="genre" id="">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
              </select>
            </div>
          </>
        }
        <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum odio deleniti hic. Ab, voluptatum commodi. Nisi eum, perferendis, pariatur nemo tempore dignissimos tempora dolorum eaque necessitatibus illo quos facere doloribus blanditiis? Nostrum in dicta nulla minus unde ex alias?</p>
        <div className="button-container">
          <button className='play'><FaPlay className='icons' /> Play</button>
          <button className='info'><IoInformationCircleOutline className='icons' />Info</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
