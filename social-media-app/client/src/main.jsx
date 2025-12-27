import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DarkContextProvider } from './context/darkContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DarkContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </DarkContextProvider>
  </BrowserRouter>
)
