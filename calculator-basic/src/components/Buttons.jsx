import React from 'react'

const Buttons = ({ handleData, clearData, calculateOutput }) => {
  return (
    <>
      <button className='clear' onClick={(e) => { clearData(e.target.innerText) }}>AC</button>
      <button className='delete' onClick={(e) => {clearData(e.target.innerText)}}>Del</button>
      <button onClick={(e) => { handleData('/') }}>÷</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>1</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>2</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>3</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>*</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>4</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>5</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>6</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>+</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>7</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>8</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>9</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>-</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>.</button>
      <button onClick={(e) => { handleData(e.target.innerText) }}>0</button>
      <button className='equals' onClick={calculateOutput}>=</button>
    </>
  )
}

export default Buttons
