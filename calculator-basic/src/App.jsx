import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Output from './components/Output'

function App() {
  const [data, setData] = useState('')

  const handleData = (data2) => {
    if (['+', '-', '*', '/'].includes(data2)) {
      let previousEnteredValue = data.slice(-1)
      if (data2 == previousEnteredValue) {
        return
      }
      else if (previousEnteredValue == '*' && data2 == '/' || data2 == '*' && previousEnteredValue == '/') {
        return
      }
      else if (['+', '-', '*', '/'].includes(previousEnteredValue)) {
        let newData = data.slice(0, -1)
        setData(newData + data2)
        return
      }
    }
    else if(data2 == '.'){
      let previousEnteredValue = data.slice(-1)
      if (data2 == previousEnteredValue) {
        return
      }
    }
    else if(data2 == '0' && data == ''){
      return
    }
    let newData = data + data2
    setData(newData)
  }
  const clearData = (operation) => {
    if (operation == 'AC') {
      setData('')
      return
    }
    let newData = data.slice(0, -1);
    setData(newData)
  }
  const calculateOutput = () => {
    try {
      let calculatedData = eval(data)
      setData(calculatedData.toString())
    }
    catch(e) {
      alert(e);
    }
  }
  return (
    <>
      <div className="calculator-container">
        <Output data={data} />
        <Buttons handleData={handleData} clearData={clearData} calculateOutput={calculateOutput} />
      </div>
    </>
  )
}

export default App
