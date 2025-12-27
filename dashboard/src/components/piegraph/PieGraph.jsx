import React from 'react'
import MyPieChart from '../MyPieChart'
import './PieGraph.scss'

const data = [
  { name: 'Mobile', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Laptop', value: 300 },
  { name: 'Tablet', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieGraph = () => {
  return (
    <div className='piegraph'>
      <h2>Leads By Source</h2>
      <div>
        <MyPieChart />
      </div>
      <div className='pie-info'>
        {
          data.map((item, i) => {
            return <div className='item'>
              <div className='item-info'>
                <span className='color' style={{backgroundColor: COLORS[i]}}></span>
                <span>{item.name}</span>
              </div>
              <span className='value'>{item.value}</span>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default PieGraph
