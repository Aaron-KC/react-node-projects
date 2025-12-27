import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Amount from './components/Amount'
import Images from './components/Images'

const App = () => {
  const [state, setState] = useState({
    search: '',
    amount: '15',
    images: [],
    isLoading: false
  })

  const apiKey = import.meta.env.VITE_APIKEY
  const apiURL = `https://pixabay.com/api/?key=${apiKey}&q=${state.search}&image_type=photo&image_type=photo&per_page=${state.amount}&safe_search=true`;

  const handleState = (key, value) => {
   setState(previousState => ({...previousState, [key]: value}))
  }

  useEffect(() => {
    if (state.search.trim() == '') {
      handleState('images', [])
      return
    }

    handleState('isLoading', true)

    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        handleState('images', data.hits)
      })
      .catch(e => console.error('error fetching images!', e))
      .finally(() => {
        handleState('isLoading', false)
      })
  }, [state.search, state.amount])
  return (
    <>
      <Navbar />
      <Search handleState={handleState} />
      <Amount handleState={handleState} />

      {
        state.isLoading ? 'Please wait. The Images are being Loaded...' : <Images images={state.images} />
      }
    </>
  )
}

export default App
