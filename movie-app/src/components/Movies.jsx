import React from 'react'

const Movies = ({ movies, info, color, addToFavourites, removeFromFavourites }) => {
  return (
    <div className='d-flex p-3 overflow-x-auto flex-nowrap'>
      {
        movies.map((movie, index) => {
          return <div className='m-3 poster' key={index}>
            <img src={movie.Poster} className='h-100 ' />
            <div className="overlay d-flex justify-content-center align-items-center" id={index} onClick={() => {
              if(info == 'Add To Favourites') {
                addToFavourites(movie)
              } else {
                removeFromFavourites(index)
              }
            }}>
              <div>
                {info} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color} className="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                </svg>
              </div>
            </div>
          </div>

        })
      }
    </div>
  )
}

export default Movies
