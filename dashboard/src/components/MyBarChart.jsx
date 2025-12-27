import React from 'react'
import { BarChart, Tooltip, Bar, ResponsiveContainer } from 'recharts'

const MyBarChart = ({barchartInfo}) => {
  return (
    <ResponsiveContainer style={{width: '100%', height: '100%'}}>
      <BarChart width={100} height={100} data={barchartInfo.chartData}>
        <Tooltip position={{ x: 90, y: -20 }} contentStyle={{backgroundColor: 'transparent', border: 'none'}} labelStyle={{display: 'none'}} cursor={false}/>
        <Bar dataKey={barchartInfo.dataKey} fill={barchartInfo.color} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default MyBarChart
