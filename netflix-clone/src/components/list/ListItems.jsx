import React, { useState } from 'react'
import './list.scss'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import { IoIosPlay, IoMdPlay } from 'react-icons/io'

const ListItems = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='listitem' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ left: index == 0 ? 0 : index * 220 + index * 5 }}>
      <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
      {
        isHovered && (
          <>
          <video src="https://samplelib.com/lib/preview/mp4/sample-10s.mp4" autoPlay loop></video>
            <div className="icons">
              <IoIosPlay className='icon' />
              <FaPlus className='icon' />
              <BiSolidLike className='icon' />
              <BiSolidDislike className='icon' />
            </div>
            <div className="timestamps">
              <span>1 hour</span>
              <span>14 mins</span>
              <span className='age'>+16</span>
              <span>1999</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ab eveniet laboriosam cum, earum quisquam.</p>
            <span>Action</span>
          </>
        )
      }
    </div>
  )
}

export default ListItems
