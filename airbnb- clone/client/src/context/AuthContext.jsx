import { createContext, useEffect, useState } from "react"


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('user')) || null)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(auth))
  }, [auth])

  return <AuthContext.Provider value={{auth, setAuth}}>
    {children}
  </AuthContext.Provider>
}