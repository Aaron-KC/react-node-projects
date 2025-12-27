import React, { useContext, useState } from 'react'
import { MyContext } from '../context/MyContext'

const New = () => {
  const [newtransaction, setNewTransaction] = useState('')
  const [amount, setAmount] = useState('')
  const {transactions, dispatch} = useContext(MyContext)

  const addTransaction = (e) => {
    e.preventDefault()
    if(newtransaction.trim() !== '' && amount.trim() !== '' ) {
      dispatch({type: 'ADD_TRANSACTION', payload: {
        id: transactions.length,
        transaction: newtransaction,
        amount: Number(amount)
      }})
    }
    setNewTransaction('')
    setAmount('')
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." onChange={e => setNewTransaction(e.target.value)} value={newtransaction}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          <input type="number" id="amount" placeholder="Enter amount..." onChange={e => setAmount(e.target.value)} value={amount} />
        </div>
        <button className="btn" onClick={addTransaction}>Add transaction</button>
      </form>
    </>
  )
}

export default New
