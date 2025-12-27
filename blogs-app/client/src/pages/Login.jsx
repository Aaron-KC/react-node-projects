import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext.jsx'
import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })


  const handleChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const {login, error} = useContext(AuthContext)


  const handleSubmit = async e => {
    e.preventDefault()
      await login(user)
  }
  
  return (
    <div className='w-full min-h-[100vh] bg-[#b9e7e7] flex justify-center items-center flex-col gap-3'>
    <h1 className='text-2xl text-teal-700 font-bold'>Login</h1>
    <form className="register p-7 bg-white flex flex-col gap-5 w-[300px]">
      <input type="text" placeholder='email' className='border-b-2 border-gray-500 p-2 outline-none' name='email' onChange={handleChange}/>
      <input type="password" placeholder='password' className='border-b-2 border-gray-500 p-2 outline-none' name='password' onChange={handleChange}/>
      <button className='bg-teal-700 text-white w-full py-2' type='submit' onClick={handleSubmit}>Login</button>
      {
        error && <p className='text-center text-red-500'>{error}</p>
      }
      <span>Do not have an account?<Link to={'/register'} style={{textDecoration: 'underline'}}>Register</Link> </span>
    </form>
  </div>
  )
}

export default Login
