import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Transaction from './Transaction'

const Transactions = () => {
  const {transactions, dispatch} = useContext(MyContext)
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <Transaction transactions={transactions} dispatch={dispatch} />
      </ul>

    </>
  )
}

export default Transactions
