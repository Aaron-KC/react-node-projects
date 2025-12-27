import React, { useEffect, useState } from 'react'
import { AiOutlineSwap } from "react-icons/ai";
import './App.css'
import Input from './components/Input';
import Select from './components/Select';
import Output from './components/Output';

const App = () => {
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('NPR')
  const [input, setInput] = useState(1)
  const [value, setValue] = useState(134)
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getData = (from, to) => {
    setIsLoading(true);
    fetch(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_APIKEY}/pair/${from}/${to}`)
      .then(res => res.json())
      .then(data => {
        const rate = data.conversion_rate.toFixed(2);
        setValue(rate);
        setOutput(`${input} ${fromCurrency} = ${(rate * input).toFixed(2)} ${toCurrency}`);
      })
      .catch(e => setOutput('Error Occurred!'))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData(fromCurrency, toCurrency);
  }
  const handleExchange = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }
  useEffect(() => {
    getData(fromCurrency, toCurrency);
  }, [])
  return (
    <div className='container'>
      <h2>Currency Converter</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input handleInput={(e) => setInput(e.target.value)} input={input} />
        <main>
          <div className="from">
            <label htmlFor="from">From</label>
            <div>
              <img src={`https://flagsapi.com/${fromCurrency.substring(0, 2)}/flat/64.png`} />
              <Select currency={fromCurrency} handleCurrency={(e) => setFromCurrency(e.target.value)} />
            </div>
          </div>
          <div className="icon-container" onClick={handleExchange}>
            <AiOutlineSwap className='icon' />
          </div>
          <div className="to">
            <label htmlFor="to">To</label>
            <div>
              <img src={`https://flagsapi.com/${toCurrency.substring(0, 2)}/flat/64.png`} />
              <Select currency={toCurrency} handleCurrency={(e) => setToCurrency(e.target.value)} />
            </div>
          </div>
        </main>
        <button type='submit' className={isLoading ? 'loading' : null}>Get Exchange Rate</button>
        <Output output={isLoading ? 'Getting Exchange Rate...' : output} />
      </form>
    </div>
  )
}

export default App
