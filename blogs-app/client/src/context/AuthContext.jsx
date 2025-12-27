import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {})
  const [error, setError] = useState(null)
  const navigate = useNavigate()


  const login = async inputs => {
    try {
      const res = await axios.post('http://localhost:5001/api/user/login', inputs, {
        withCredentials: true,
      })
      setUser(res?.data)
      navigate('/')
    } catch (err) {
      setError(err?.response?.data)
    }
  }

  const logout = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/user/logout')
      setUser({})
    } catch (e) {
      console.log('Error occurred while logging out!')
    }
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return <AuthContext.Provider value={{
    login, logout ,user, error
  }}>{children}</AuthContext.Provider>
}