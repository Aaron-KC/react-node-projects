import { createContext, useState } from "react";

export const DarkContext = createContext()

export const DarkContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return <DarkContext.Provider value={{darkMode, handleDarkMode}}>{children}</DarkContext.Provider>
}