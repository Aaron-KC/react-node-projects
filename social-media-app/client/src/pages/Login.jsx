import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [err, setErr] = useState(null)
  const navigate = useNavigate()

  const handleInputs = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const {login} = useContext(AuthContext)
  console.log(login)

  const handleLogin = async () => {
    try {
      await login(inputs)
      navigate('/')
    }
    catch (err) {
      setErr(err?.response?.data)
    }
  }

  console.log(inputs)
  return (
    <div className='min-h-[100vh] w-full xl:flex xl:justify-center xl:items-center bg-[rgb(193,190,255)]'>
      <div className="rounded-lg overflow-hidden flex  h-fit xl:h-[450px] lg:w-1/2 w-full xl:w-[700px] flex-col xl:flex-row-reverse mx-auto xl:m-0">
        <div className="w-full xl:w-1/2 p-[50px] flex items-center bg-white">
          <div className='flex flex-col gap-4 w-full'>
            <h1 className='text-2xl font-semibold'>Login</h1>
            <input type="text" placeholder='Email' className='border-b-2 border-gray-400 py-3 px-1 outline-none w-full' onChange={handleInputs} name='email' />
            <input type="password" placeholder='Password' className='border-b-2 border-gray-400 py-3 px-1 outline-none w-full' onChange={handleInputs} name='password' />
            {
              // err && err
            }
            <button className='text-white bg-[#938eef] w-fit px-5 py-2 mt-4' onClick={handleLogin}>Login</button>
          </div>
        </div>
        <div className='w-full xl:w-1/2 p-[50px] flex flex-col justify-center gap-4 h-full background'>
          <h1 className='text-6xl text-white font-bold'>Hello World.</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque unde!</p>
          <span className='text-white'>Don't you have an account?</span>
          <Link to={'/register'}>
            <button className='bg-white text-[[#938eef]] w-fit px-12 py-1'>Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
