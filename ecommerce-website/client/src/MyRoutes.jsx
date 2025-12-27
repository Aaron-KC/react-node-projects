import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products/:categoryId' element={<Category />} />
          <Route path='/product/:productId' element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
