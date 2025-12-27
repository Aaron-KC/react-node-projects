import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <div className='form-floating w-50'>
      <input type="text" className='form-control' placeholder='' onChange={(e) => handleSearch(e.target.value)} />
      <label htmlFor="search" className='text-black'> Movie Name</label>
    </div>
  )
}

export default Search
