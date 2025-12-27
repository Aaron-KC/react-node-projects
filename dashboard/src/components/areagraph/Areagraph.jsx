import React from 'react'
import './Areagraph.scss'
import MyAreaChart from '../MyAreaChart'
import { areaData } from '../../data'

const Areagraph = () => {
  return (
    <div className='areagraph'>
      <h1>Revenue Analytics</h1>
      <div>
        <MyAreaChart areaData={areaData}/>
      </div>
    </div>
  )
}

export default Areagraph
