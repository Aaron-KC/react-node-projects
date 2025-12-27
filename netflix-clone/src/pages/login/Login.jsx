import React from 'react'
import './login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className="navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
      </div>
      <div className="info">
        <h1>Sign In</h1>
        <input type="text" placeholder='Enter email' />
        <input type="password" placeholder='Enter Password' />
        <button>Sign In</button>
        <p>New to Netflix? <span>Sign up</span> now.</p>
        <p className='captcha'>This page is protected by Google reCAPTCHA to ensure you are not a bot. <span>Learn more.</span></p>
      </div>
    </div>
  )
}

export default Login
