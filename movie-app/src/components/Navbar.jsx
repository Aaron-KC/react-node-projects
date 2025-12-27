import React from 'react'
import Title from './Title'
import Search from './Search'

const Navbar = ({handleSearch}) => {
  return (
    <div className='d-flex justify-content-between p-3 ps-4 align-items-center'>
      <Title heading={'Movies'}/>
      <Search handleSearch={handleSearch} />
    </div>
  )
}

export default Navbar
