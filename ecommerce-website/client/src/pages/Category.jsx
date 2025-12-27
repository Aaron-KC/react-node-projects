import React, { useState } from 'react'
import Card from '../components/Card'
import UseFetch from '../utils/hooks/UseFetch'
import { useParams } from 'react-router-dom'
import List from '../components/List'

// const items = [
//   {
//     id: 1,
//     img1: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     isnew: true
//   },
//   {
//     id: 2,
//     img1: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     isnew: true
//   },
//   {
//     id: 3,
//     img1: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     isnew: false
//   },
//   {
//     id: 4,
//     img1: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     isnew: false
//   }
// ]

const Category = () => {
  const [maxPrice, setMaxPrice] = useState(1000)
  const [selectedSubCat, setSelectedSubCat] = useState([])
  const [order, setOrder] = useState('asc')
  const id = Number(useParams()?.categoryId)

  const { items } = UseFetch(`/subcategories?populate=*&filters[categories][id][$eq]=${id}`)

  console.log(items)
  const handleChange = (e) => {
    const id = Number(e.target.value)
    const isChecked = e.target.checked

    setSelectedSubCat(isChecked? [...selectedSubCat, id]: selectedSubCat.filter(item => item != id))
  }
  console.log(selectedSubCat)
  return (
    <div className='category pt-8 flex'>
      <div className='ps-5 pe-32 left h-full'>
        <div>
          <h1 className='text-xl mb-2'>Product Categories</h1>
          {
            items?.map(item => {
              return <>
                <div className='flex gap-2 mb-1' key={item.id}>
                  <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
                  <label htmlFor={item.id} className='cursor-pointer'>{item.title}</label>
                </div>
              </>
            })
          }
        </div>
        <div>
          <h1 className='text-xl mb-2'>Filter by price</h1>
          <div className='flex items-center gap-1 mb-3'>
            <span>0</span>
            <input type="range" max={1000} onChange={(e) => setMaxPrice(Number(e.target.value))} value={maxPrice}/>
            <span>{maxPrice.toString().padStart('4', '0')}</span>
          </div>
          <div>
            <h1 className='text-xl mb-2'>Sort by</h1>
            <div className='flex gap-2 mb-1'>
              <input type="radio" id='3' name="price" onChange={() => setOrder('asc')}/>
              <label htmlFor="3">Price (Lowest first)</label>
            </div>
            <div className='flex gap-2 mb-1'>
              <input type="radio" id='4' name='price' onChange={() => setOrder('desc')}/>
              <label htmlFor="4">Price (Highest first)</label>
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 w-full'>
        <div className='w-full h-[40vh]'>
          <img src={id == 2 ? 'https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600': "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"} className='h-full w-full object-cover' alt="" />
        </div>
        <div className='flex flex-wrap py-6 justify-between'>
          <List selectedSubCat={selectedSubCat} catId={id} maxPrice={maxPrice} order={order}/>
        </div>
      </div>
    </div>
  )
}

export default Category
