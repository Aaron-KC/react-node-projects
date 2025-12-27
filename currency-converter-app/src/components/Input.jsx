import React from 'react'

const Input = ({handleInput, input}) => {
  return (
    <div className="input-container">
      <label htmlFor="currency">Enter Amount</label>
      <input type="number" id="currency" onChange={handleInput} value={input} />
    </div>
  )
}

export default Input
