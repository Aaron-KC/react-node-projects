import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Recipe from './pages/Recipe'

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/recipes' element={<Recipes />}/>
            <Route path='/recipes/:id' element={<Recipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes
