import React, { useRef, useState } from 'react'
import './register.scss'

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState('')

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }

  const handlePassword = () => {
    setPassword(emailRef.current.value)
  }
  return (
    <div className='register'>
      <div className="navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
        <button>Sign In</button>
      </div>
      <div className="info">
        <h1>
          Unlimited movies, TV shows, and more.
        </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        {
          email ? (<>
            <div className="input">
              <input type="password" placeholder='enter password' ref={passwordRef} />
              <button onClick={handlePassword}>Start</button>
            </div>

          </>) : (<>
            <div className="input">
              <input type="text" placeholder='enter email' ref={emailRef} />
              <button onClick={handleStart}>Get Started </button>
            </div>
          </>)

        }

      </div>
    </div>
  )
}

export default Register
