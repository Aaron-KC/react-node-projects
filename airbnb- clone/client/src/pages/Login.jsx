import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { axiosIns } from '../utils/Axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const {setAuth} = useContext(AuthContext)

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = () => {
    axiosIns.post('/user/login', user)
      .then(res => {
        setAuth(res.data.user)
        alert('User Logged In Successfully!');
        navigate('/');
      })
      .catch(error => {
        const errorMsg = error.response.data.error;
        if (errorMsg) { setErr(errorMsg) }
        else {
          console.log(error)
        }
      })
  }

  return (
    <div className='min-h-[80vh] flex justify-center items-center flex-col'>
      <div className='flex flex-col gap-3 p-5 min-w-[40%]'>
        <h1 className='text-3xl pb-2 text-center'>Login</h1>
        <input type="email" placeholder='your@email.com' onChange={handleChange} name='email' />
        <input type="password" placeholder='password' onChange={handleChange} name='password' />
        <button className='bg-primary text-white rounded-full py-1' onClick={handleSubmit}>Login</button>
        {
          err && <div className='text-red-500 font-bold text-lg text-center'>{err}</div>
        }
        <span className='text-gray-500 text-center'>Not a member? <Link to={'/register'} className='text-black underline'>Register</Link></span>
      </div>
    </div>
  )
}

export default Login
