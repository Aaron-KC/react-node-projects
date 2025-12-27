import React from 'react'
import Slider from '../components/Slider'
import Features from '../components/Features'
import Categories from '../components/Categories'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Slider />
      <Features feature={'Featured Products'} type={'featured'}/> 
      <Categories />
      <Features feature={'Trending'} type={'trending'}/> 
      <Contact />

    </>
  )
}

export default Home
