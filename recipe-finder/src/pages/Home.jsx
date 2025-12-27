import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className='h-[94vh] w-full bg-black font-[poppins] relative'>
        <div className="bg-offset absolute inset-0 bg-black opacity-70"></div>
        <img src="./public/2.jpeg" className='object-cover w-full h-full' alt="" />
        <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-white'>
          <h1 className='text-7xl  font-[600] tracking-widest'>OUR RECIPES</h1>
          <Link to="/recipes"><button className='mt-9 bg-blue-600 px-5 py-3 font-[500] rounded-md' onClick={() => { dispatch({ type: "recipe" }); console.log("button clicked") }}>SEARCH RECIPES</button></Link>
        </div>
      </div>
    </>
  )
}

export default Home
