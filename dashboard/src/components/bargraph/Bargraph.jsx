import React from 'react'
import './Bargraph.scss'
import MyBarChart from '../MyBarChart'

const Bargraph = ({barchartInfo}) => {
  return (
    <div className='bargraph'>
      <div className="top">
        <span>{barchartInfo.title}</span>
      </div>
      <div className="bottom">
        <MyBarChart barchartInfo={barchartInfo}/>
      </div>
    </div>
  )
}

export default Bargraph
