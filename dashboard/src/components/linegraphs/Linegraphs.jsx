import React from 'react'
import './Linegraphs.scss'
import MyLineChart from '../MyLineChart'

const Linegraphs = ({ chartBoxInfo }) => {
  return (
    <div className='linegraph'>
      <div className='left'>
        <div className="info">
          <img src={chartBoxInfo.icon} alt="" />
          <span>{chartBoxInfo.title}</span>
        </div>
        <h1>
          {chartBoxInfo.number}
        </h1>
        <span style={{ color: chartBoxInfo.color }}>View all</span>
      </div>
      <div className="right">
        <div className="chart">
          <MyLineChart data={chartBoxInfo.chartData} stroke={chartBoxInfo.color} dataKey={chartBoxInfo.dataKey}/>
        </div>
        <div className='info'>
          <span style={{ color: chartBoxInfo.percentage > 0 ? 'lightgreen' : 'red', fontWeight: 'bold',fontSize: '18px' }}>{chartBoxInfo.percentage}%</span>
          <span>this month</span>
        </div>
      </div>
    </div>
  )
}

export default Linegraphs
