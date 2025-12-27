import React from 'react'

const QuizItem = ({ data, questionNo, classname, handleClick, clickedAnswerId }) => {
  return (
    <>
      <div className="question">{data[questionNo - 1]?.question}</div>
      <div className="answers">
        {
          data[questionNo - 1]?.answers.map((answer, i) => {
            return <div className={clickedAnswerId == i ? classname : 'answer'} key={i} onClick={() => handleClick(answer,i)}> {answer.text}</div>
          })
        }
      </div>

    </>
  )
}

export default QuizItem
