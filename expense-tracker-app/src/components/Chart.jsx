import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Chart = () => {
  const { transactions } = useContext(MyContext)

  const incomeTransactions = transactions.filter((trans) => trans.amount > 0)
  if (incomeTransactions.length > 0) {
    var totalIncome = incomeTransactions.map((trans) => trans.amount).reduce((acc, curr) => {
      return acc + curr;
    })
  } else {
    totalIncome = 0
  }

  const expenseTransactions = transactions.filter(trans => trans.amount < 0)
  if (expenseTransactions.length > 0) {
    var totalExpenses = Math.abs(expenseTransactions.map(trans => trans.amount).reduce((acc, curr) => acc + curr))
  } else {
    totalExpenses = 0
  }


  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${totalIncome}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${totalExpenses}</p>
        </div>
      </div>
    </>
  )
}

export default Chart
