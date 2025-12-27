import React from 'react'
import './Product.scss'
import { Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { singleProduct } from '../../data'



const Product = () => {
  return (
    <div className='product-container'>
      <div className="left">
        <div className="product-info">
          <img src={singleProduct.img} alt="" />
          <h2>{singleProduct.title}</h2>
          <button>Update</button>
        </div>
        {
          singleProduct.info.map(info => {
            return <div className='product-info2' key={info[0]}>
              <h2>{info[0]}</h2>
              <span>{info[1]}</span>
            </div>
          })
        }
        <hr />
        <div className="area-graph">
          <ResponsiveContainer width={'99%'} height={'100%'}>
            <LineChart width={730} height={250} data={singleProduct.chart.data}>
              <XAxis dataKey={'name'} />
              <YAxis />
              <Legend />
              <Tooltip position={{ x: 100, y: 50 }} contentStyle={{backgroundColor: 'transparent', border: 'none'}} labelStyle={{display: 'none'}} cursor={false}/>
              <Line type="monotone" dataKey={singleProduct.chart.dataKeys[0].name} stroke={singleProduct.chart.dataKeys[0].color} dot={false}/>
              <Line type="monotone" dataKey={singleProduct.chart.dataKeys[1].name} stroke={singleProduct.chart.dataKeys[1].color} dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="right">
        {
          singleProduct.activities.map((activity, index) => {
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

export default Product
