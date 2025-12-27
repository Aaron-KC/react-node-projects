import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './index.css'

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const handleShow = () => {
    setShow(!show)
  }
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const today = new Date().toDateString()
    console.log(today);
    const localKey = `NASA-${today}`
    if (localStorage.getItem(localKey)) {
      setData(JSON.parse(localStorage.getItem(localKey)))
      console.log('data loaded from localStorage')
      return
    }
    localStorage.clear()

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log('data loaded from api')
        localStorage.setItem(localKey, JSON.stringify(data))
      })
  }, [])
  return (
    <>
      {
        data ?
          <>
            <Main data={data} />
            {
              show && <Sidebar handleShow={handleShow} data={data} />
            }
            <Footer handleShow={handleShow} data={data} />
          </>
          :
          (<div className="loading">
            <i className="bi bi-gear-fill"></i>
          </div>)
      }
    </>
  )
}

export default App
