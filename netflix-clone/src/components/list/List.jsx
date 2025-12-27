import React, { useRef, useState } from 'react'
import ListItems from './ListItems'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import './list.scss'

const List = () => {
  const scrollDiv = useRef('')
  const [noOfScrolls, setNoOfScrolls] = useState(0)
  const [isMoved, setIsMoved] = useState(false)
  const handleScroll = (direction) => {
    setIsMoved(true)
    const distance = scrollDiv.current.getBoundingClientRect().left - 50

    if (direction == 'left' && noOfScrolls > 0) {
      scrollDiv.current.style.transform = `translateX(${distance + 225}px)`
      setNoOfScrolls((prev) => prev - 1)
    } else if (direction == 'right' && noOfScrolls < 4) {
      scrollDiv.current.style.transform = `translateX(${distance - 225}px)`
      setNoOfScrolls(prev => prev + 1)
    } 
  }

  return (
    <>
      <div className='container'>
        <h3>Continue to Watch</h3>
        <div className='content'>
          <div className="left" onClick={() => handleScroll('left')} style={{ display: !isMoved && 'none' }}>
            <SlArrowLeft />
          </div>
          <div ref={scrollDiv}>
            <ListItems index={0}/>
            <ListItems index={1}/>
            <ListItems index={2}/>
            <ListItems index={3}/>
            <ListItems index={4}/>
            <ListItems index={5}/>
            <ListItems index={6}/>
            <ListItems index={6}/>
            <ListItems index={8}/>
            <ListItems index={9}/>
          </div>
          <div className="right" onClick={() => handleScroll('right')}>
            <SlArrowRight />
          </div>
        </div>
      </div>

    </>
  )
}

export default List
