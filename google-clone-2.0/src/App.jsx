import React, { useContext, useState } from 'react'
import MyRoutes from './MyRoutes'
import './index.css'
import './App.css'
import { MyContext } from './context/MyContext'

const App = () => {
  const {darkMode} = useContext(MyContext)
  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <MyRoutes />
      </div>
    </>
  )
}

export default App
