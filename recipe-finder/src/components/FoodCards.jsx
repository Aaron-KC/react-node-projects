import React from 'react'
import { Link } from 'react-router-dom'

const FoodCards = ({item}) => {
  return (
    <>
      <div className="card mb-4" style={{width: "18rem"}}>
        <img src={item.image_url} className="card-img-top h-60 object-cover" alt="..." />
          <div className="card-body">
            <h5 className="card-title truncate">{item.title}</h5>
            <p className="card-text">Publisher: {item.publisher}</p>
            <Link to={`/recipes/${item.recipe_id}`} className="btn btn-primary mt-8">Details</Link>
            <a href={item.source_url} target='_blank' className="btn btn-success mt-8 ms-2">Recipe URL</a>
          </div>
      </div>
    </>
  )
}


export default FoodCards
