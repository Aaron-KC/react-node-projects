import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Products from  './pages/products/Products'
import User from './pages/user/User'
import Product from './pages/product/Product'
const MyRoutes = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
        <Route path='/users/:userId' element={<User />} />
        <Route path='/products/:productId' element={<Product />} />
        </Route>
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default MyRoutes
