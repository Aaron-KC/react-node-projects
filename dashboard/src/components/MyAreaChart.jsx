import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const MyAreaChart = ({areaData}) => {
  return (
    <ResponsiveContainer style={{ width: '100%', height: '100%' }}>
      <AreaChart width={730} height={250} data={areaData}>
        <Tooltip position={{ x: 300, y: 0 }} contentStyle={{ backgroundColor: 'transparent', border: 'none' }} labelStyle={{ display: 'none' }} cursor={false} />
        <Area type="monotone" dataKey={'books'} stroke="#8884d8" fillOpacity={1} fill="skyblue" />
        <Area type="monotone" dataKey='clothes' stroke="#82ca9d" fillOpacity={0.7} fill="#FF8042" />
        <Area type="monotone" dataKey='electronic' stroke="#82ca9d" fillOpacity={0.7} fill="teal" />
        <XAxis dataKey="name" />
        <YAxis />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default MyAreaChart
