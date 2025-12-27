import React from 'react'
import './Home.scss'
import Topdeals from '../../components/topdeals/Topdeals'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, topDealUsers } from '../../data'
import Linegraphs from '../../components/linegraphs/Linegraphs'
import { chartBoxUser } from '../../data'
import Bargraph from '../../components/bargraph/Bargraph'
import Areagraph from '../../components/areagraph/Areagraph'
import PieGraph from '../../components/piegraph/PieGraph'

const Home = () => {
  return (
    <div className='home'>
      <div className="box box1">
        <Topdeals topDealUsers={topDealUsers} />
      </div>
      <div className="box box2">
        <Linegraphs chartBoxInfo={chartBoxUser} />
      </div>
      <div className="box box3">
        <Linegraphs chartBoxInfo={chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieGraph />
      </div>
      <div className="box box5">
        <Linegraphs chartBoxInfo={chartBoxConversion} />
      </div>
      <div className="box box6">
        <Linegraphs chartBoxInfo={chartBoxRevenue} />
      </div>
      <div className="box box7">
        <Areagraph />
      </div>
      <div className="box box8">
        <Bargraph barchartInfo={barChartBoxVisit} />
      </div>
      <div className="box box9">
        <Bargraph barchartInfo={barChartBoxRevenue} />
      </div>
    </div>
  )
}

export default Home
