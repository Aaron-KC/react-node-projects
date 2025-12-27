import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Balance = () => {
  const {transactions} = useContext(MyContext)
  
  if(transactions.length > 0) {
    const amounts = transactions.map((transaction) => {
      return transaction.amount;
    })
    var balance = amounts.reduce((acc, curr) => {
      return acc + curr
    })
  }
  else {
    balance = 0;
  }

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </>
  )
}

export default Balance
