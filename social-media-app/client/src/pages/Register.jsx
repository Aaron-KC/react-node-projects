import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: ''
  })
  const [err, setErr] = useState(null)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleRegister = () => {
    axios.post('http://localhost:5001/api/auth/register', inputs)
      .then(res => {
        navigate('/login')
      })
      .catch(err => {
        setErr(err?.response?.data)
      })
    }
    console.log(err)
  return (
    <>
      <div className='min-h-[100vh] w-full xl:flex xl:justify-center xl:items-center bg-[rgb(193,190,255)]'>
        <div className="rounded-lg overflow-hidden flex h-fit xl:h-[450px] lg:w-1/2 w-full xl:w-[700px] flex-col xl:flex-row mx-auto xl:m-0">
          <div className="w-full xl:w-1/2 p-[50px] flex flex-col justify-between bg-white">
            <h1 className='text-2xl font-semibold'>Register</h1>
            <input type="text" placeholder='Username' name='username' className='border-b-2 border-gray-400 py-3 px-1 outline-none' onChange={handleChange}/>
            <input type="text" placeholder='Email' className='border-b-2 border-gray-400 py-3 px-1 outline-none' name='email' onChange={handleChange}/>
            <input type="password" placeholder='Password' className='border-b-2 border-gray-400 py-3 px-1 outline-none' name='password' onChange={handleChange}/>
            <input type="name" placeholder='Name' className='border-b-2 border-gray-400 py-3 px-1 outline-none' name='name' onChange={handleChange}/>
            {
              err && err
            }
            <button className='text-white bg-[#938eef] w-fit px-5 py-2 mt-4' onClick={handleRegister}>Register</button>
          </div>
          <div className='w-full xl:w-1/2 p-[50px] flex flex-col justify-center gap-4 h-full background'>
            <h1 className='text-6xl text-white font-bold'>Our <br />Social.</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque unde voluptatum minima soluta. Consectetur eaque maxime, accusantium consequatur similique itaque!</p>
            <span className='text-white'>Do you have an account?</span>
            <Link to={'/login'}>
              <button className='bg-white text-[[#938eef]] w-fit px-12 py-1'>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
