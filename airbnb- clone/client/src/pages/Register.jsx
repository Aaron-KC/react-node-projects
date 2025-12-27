import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { axiosIns } from '../utils/Axios';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    axiosIns.post('/user/register', user)
    .then(res => {
      alert(res.data.message);
      navigate('/login');
    })
    .catch(error => {
      const errorMsg = error.response.data.error;
      if(errorMsg){ setErr(errorMsg)}
      else {
        console.log(error)
      }
    })
  }
  return (
    <div className='min-h-[80vh] flex justify-center items-center flex-col'>
      <div className='flex flex-col gap-3 p-5 min-w-[40%]'>
        <h1 className='text-3xl pb-2 text-center'>Register</h1>
        <input type="text" placeholder='John Doe'  onChange={handleChange} name='username'/>
        <input type="email" placeholder='your@email.com' onChange={handleChange} name='email'/>
        <input type="password" placeholder='password' onChange={handleChange} name='password'/>
        <button className='bg-primary text-white rounded-full py-1' onClick={handleSubmit}>Register</button>
        {
          err && <div className='text-red-500 font-bold text-lg text-center'>{err}</div>
        }
        <span className='text-gray-500 text-center'>Already a member? <Link to={'/login'} className='text-black underline'>Login</Link></span>
      </div>
    </div>
  )
}

export default Register
