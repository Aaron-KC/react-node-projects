import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import { AuthContext } from '../context/authContext';
import Share from '../components/Share';

const Home = () => {
  let {currentUser} = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
      return
    }
  }, [])
  return (
    <div className='flex-[5] bg-[#f6f3f3] dark:bg-[#333] px-10 py-2'>
      <Stories />
      <Share />
      <Posts />
    </div>
  )
}

export default Home
