import React from 'react'
import './App.css'
import './index.css'
import MyRoutes from './MyRoutes'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <div className='app-container min-h-[100vh] w-full'>
      <AuthContextProvider>
      <MyRoutes />
      </AuthContextProvider>
    </div>
  )
}

export default App
