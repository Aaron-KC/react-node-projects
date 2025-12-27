import React from 'react'

const Transaction = ({transactions, dispatch}) => {

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  
  return (
    <>
      {
        transactions?.length > 0 && transactions.map(transaction => {
          return <>
            <li className={transaction.amount > 0 ? 'plus' : 'minus'} key={transaction.index}>
              {transaction.transaction} <span>{
                transaction.amount > 0 ? '+': '-'
                }${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
            </li>
          </>
        })
      }
    </>
  )
}

export default Transaction
