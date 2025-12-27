import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Post from './pages/Post'
import Login from './pages/Login'
import Register from './pages/Register'
import Write from './pages/Write'

const MyRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/write' element={<Write />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
  )
}

export default MyRoutes
