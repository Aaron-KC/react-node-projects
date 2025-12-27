import React, { useEffect, useState } from 'react'

const Timer = ({count, setCount, questionNo}) => {
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev - 1)
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  useEffect(() => {
    setCount(30)
  }, [questionNo])
  return (
    <div className="timer">
      {count}
    </div>
  )
}

export default Timer
