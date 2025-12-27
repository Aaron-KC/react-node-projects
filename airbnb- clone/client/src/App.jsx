import React from 'react'
import MyRoutes from './MyRoutes'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>
  )
}

export default App
