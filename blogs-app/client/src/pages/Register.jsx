import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5001/api/user/register', user)
      navigate('/login')
    } catch (err) {
      setErr(err?.response.data)
    }
  }
  return (
    <div className='w-full min-h-[100vh] bg-[#b9e7e7] flex justify-center items-center flex-col gap-3'>
      <h1 className='text-2xl text-teal-700 font-bold'>Register</h1>
      <form className="register p-7 bg-white flex flex-col gap-3 w-[300px]">
        <input type="text" placeholder='username' className='border-b-2 border-gray-500 p-2 outline-none' name='username' onChange={handleChange} required />
        <input type="text" placeholder='email' className='border-b-2 border-gray-500 p-2 outline-none' name='email' onChange={handleChange} required />
        <input type="password" placeholder='password' className='border-b-2 border-gray-500 p-2 outline-none' name='password' onChange={handleChange} required />
        <button className='bg-teal-700 text-white w-full py-2' type='submit' onClick={handleSubmit}>Register</button>
        {
          err && <p className='text-center text-red-500'>{err}</p>
        }
        <span>Do you have an account? <Link to={'/login'} style={{textDecoration: 'underline'}}>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
