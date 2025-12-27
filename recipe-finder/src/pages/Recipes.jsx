import React, { useEffect, useState } from 'react'
import FoodCards from '../components/FoodCards'


const Recipes = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const previousSearch = localStorage.getItem('search_name') || ''

  const handleData = (search) => {
    if (!search.trim()) {
      alert('Please enter a search term!')
      return
    }
    if (localStorage.getItem(search)) {
      setData(JSON.parse(localStorage.getItem(search)).recipes)
      localStorage.setItem('search_name', search)
      return
    }

    fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`)
      .then(res => res.json())
      .then((data) => {
        if (data?.recipes) {
          setData(data.recipes)
          localStorage.setItem(search, JSON.stringify(data))
          localStorage.setItem('search_name', search)
        } else {
          setData([]) // clear if no recipes found
          alert('No recipes found!')
        }
      })
      .catch(e => console.error(e))
  }

  useEffect(() => {
    try {
      let previousItem = JSON.parse(localStorage.getItem(previousSearch))
      if (previousItem && previousItem.recipes) {
        setData(previousItem.recipes)
      }
    } catch (e) {
      console.error('Failed to load previous search data:', e)
    }
  }, [previousSearch])

  return (
    <>
      <div className='text-center mt-6 w-2/4 flex flex-col mx-auto gap-4'>
        <h1 className='text-2xl font-[600]'>Search Recipes With <span className='text-blue-400'>Our Recipes</span></h1>
        <p className='text-md font-[500]'>Input recipes separated by comma</p>
        <div className="form-floating flex gap-2">
          <input type="text" className="form-control" placeholder='' onChange={(e) => setSearch(e.target.value)} />
          <label htmlFor="">tomato, potato, pizza</label>
          <button className='btn btn-primary' onClick={() => handleData(search)}>Search</button>
        </div>
      </div>
      {
        data?.length > 0 && <h1 className='text-center uppercase my-4'>Recipe List For: {search == ''? previousSearch:search}</h1>
      }
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-6 gap-2 mx-auto">
        {
          data?.length > 0 ? data.map((item, i) => {
            return <FoodCards item={item} key={i} />
          }) : ""
        }
      </div>
    </>
  )
}

export default Recipes
