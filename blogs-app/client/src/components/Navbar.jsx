import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const category = ['Art', 'Science', 'Technology', 'Cinema', 'Design', 'Food']
  const {user, logout} = useContext(AuthContext)

  return (
    <>
      <div className='flex justify-between md:w-4/6 w-full py-4 flex-col xl:flex-row items-center mx-auto'>
        <Link to={'/'}>
          <h1 className='text-teal-700 text-xl'>
            OUR BLOGS
          </h1>
        </Link>
        <div className='flex gap-4 items-center'>
          {
            category.map(category => {
              return <Link to={`/?cat=${category.toLowerCase()}`} key={category}>
                <span className='text-gray-500 font-medium'>{category.toUpperCase()}</span>
              </Link>
            })
          }
          <span className='text-gray-500 font-semibold'>{user?.username}</span>
            {
              user?.username ? <span className='text-gray-500 font-semibold' onClick={logout}>Logout</span> : <Link to={'/login'} className='text-gray-500 font-semibold'>Login</Link>
            }
          <Link to={'/write'}>
            <span className='font-medium bg-[#b9e7e7] h-12 w-12 rounded-full flex justify-center items-center text-sm'>Write</span>
          </Link>
        </div>
      </div >
    </>
  )
}

export default Navbar
