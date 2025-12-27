import React from 'react'

const Main = ({data}) => {
  return (
    <div>
      <div className="img-container">
        <img src={data?.url} alt="web-pic" />
      </div>
    </div>
  )
}

export default Main
