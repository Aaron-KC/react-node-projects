import React from 'react'

const Money = ({ moneyPyramid, questionNo }) => {
  return (
    <>
      {
        moneyPyramid?.map((item, index) => {
          return <div className={questionNo == item.id? "money-rack active": "money-rack" } key={index}>
            <div className="id">{item.id}</div>
            <div className="amount">{item.amount}</div>
          </div>
        })
      }
    </>
  )
}

export default Money
