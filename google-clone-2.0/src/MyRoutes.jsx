import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Results from './components/Results'

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Results />} />
            <Route path='/news' element={<Results />} />
            <Route path='/image' element={<Results />} />
            <Route path='/video' element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes
