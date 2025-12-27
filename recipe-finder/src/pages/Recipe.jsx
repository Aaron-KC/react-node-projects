import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Recipe = () => {
  const id = useParams()?.id
  const [data, setData] = useState({})
  useEffect(() => {
    async function getData() {
      if (localStorage.getItem(`${id}`)) {
        let oldData = JSON.parse(localStorage.getItem(`${id}`))
        setData(oldData)
        return
      }

      fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
        .then(res => res.json())
        .then(data => {
          setData(data.recipe)
          localStorage.setItem(`${id}`, JSON.stringify(data.recipe))
        })
        .catch(e => {
          console.log(e);
        })
    }
    getData()
  }, [id])
  return (
    <>
      <div className="sm:grid grid-cols-2 w-3/4 mx-auto my-5 [font-poppins]">
        <div>
          <Link to={'/recipes'} className='btn btn-warning text-white w-[200px] mb-6'>Back to recipe list</Link>
          <img src={data?.image_url} alt="food image" className='w-full object-contain' />
        </div>
        <div className='font-[400] ms-8'>
          <p className='text-xl font-[cursive]'>{data?.title}</p>
          <p className='text-xl mt-2 text-yellow-500'>Provided By {data?.publisher}</p>
          <div className='my-3 flex md:flex-row flex-col gap-2'>
            <a href={data?.publisher_url} target='_blank'><button className='btn btn-secondary'>Publisher Webpage</button></a>
            <a href={data?.source_url} target='_blank' className='ms-2'><button className='btn btn-success'>Recipe URL</button></a>
          </div>
          <h1 className='font-[500] text-2xl py-2 rounded-md'>Ingredients</h1>
          <div className='shadow-xl my-2 font-[600] pt-2'>
            {
              data?.ingredients?.length > 0 && data.ingredients.map((ingredient, i) => {
                return <li className='list-none w-full border-b border-black border-opacity-10 p-3' key={i}>{ingredient}</li>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipe
