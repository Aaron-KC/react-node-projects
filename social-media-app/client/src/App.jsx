import React, { useContext } from 'react'
import './App.css'
import MyRoutes from './MyRoutes'
import { DarkContext, DarkContextProvider } from './context/darkContext'
import { AuthContextProvider } from './context/authContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


const App = () => {
  const { darkMode } = useContext(DarkContext)
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div className={darkMode ? 'dark' : ''}>
          <MyRoutes />
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
