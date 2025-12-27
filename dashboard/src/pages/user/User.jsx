import React from 'react'
import './User.scss'
import { Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { singleUser } from '../../data'



const User = () => {
  return (
    <div className='user-container'>
      <div className="left">
        <div className="user-info">
          <img src={singleUser.img} alt="" />
          <h2>{singleUser.title}</h2>
          <button>Update</button>
        </div>
        {
          singleUser.info.map(info => {
            return <div className='user-info2' key={info[0]}>
              <h2>{info[0]}</h2>
              <span>{info[1]}</span>
            </div>
          })
        }
        <hr />
        <div className="area-graph">
          <ResponsiveContainer width={'99%'} height={'100%'}>
            <LineChart width={730} height={250} data={singleUser.chart.data}>
              <XAxis dataKey={'name'} />
              <YAxis />
              <Legend />
              <Tooltip position={{ x: 100, y: 50 }} contentStyle={{backgroundColor: 'transparent', border: 'none'}} labelStyle={{display: 'none'}} cursor={false}/>
              <Line type="monotone" dataKey={singleUser.chart.dataKeys[0].name} stroke={singleUser.chart.dataKeys[0].color} dot={false}/>
              <Line type="monotone" dataKey={singleUser.chart.dataKeys[1].name} stroke={singleUser.chart.dataKeys[1].color} dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="right">
        {
          singleUser.activities.map((activity, index) => {
            return <ul key={activity.time + index}>
              <li>
                <div className='activity'>
                  <span>{activity.text}</span>
                  <span>{activity.time}</span>
                </div>
              </li>
            </ul>
          })
        }
      </div>
    </div>
  )
}

export default User
