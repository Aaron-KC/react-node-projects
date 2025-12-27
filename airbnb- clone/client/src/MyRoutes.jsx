import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Account from './pages/Account'
import Place from './pages/Place'
import Bookings from './pages/Bookings'
import Booking from './pages/Booking'

const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/account/:subCat?' element={<Account />} />
            <Route path='/account/:subCat/:id' element={<Account/>} />
            <Route path='/place/:id' element={<Place />}/>
            <Route path='/account/bookings' element={<Bookings />} />
            <Route path='/account/booking/:id' element={<Booking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MyRoutes
