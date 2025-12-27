import React from 'react'
import { LineChart, Line, Tooltip } from 'recharts';

const MyLineChart = ({data, stroke, dataKey}) => {
  return (
      <LineChart width={100} height={100} data={data}>
        <Tooltip position={{ x: -15, y: 50 }} contentStyle={{backgroundColor: 'transparent', border: 'none'}} labelStyle={{display: 'none'}} cursor={false}/>
        <Line type="monotone" dataKey={dataKey} stroke={stroke} dot={false}/>
      </LineChart>
  )
}

export default MyLineChart
