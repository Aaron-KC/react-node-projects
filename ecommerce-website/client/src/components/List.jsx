import React from 'react'
import Card from './Card'
import UseFetch from '../utils/hooks/UseFetch'

const List = ({ selectedSubCat, catId, maxPrice,order }) => {
  const url = `/products?populate=*&filters[categories][id][$eq]=${catId}&filters[price][$lte]=${maxPrice}&sort=price:${order}${selectedSubCat.map(subCat => { return `&filters[products][id][$eq]=${subCat}` })}`
  // console.log(url)
  const { items, loading, error } = UseFetch(url)
  console.log(items)
  return (
    <>
      {
        items?.map(item => {
          return <Card item={item} key={item.id} />
        })
      }
    </>
  )
}

export default List
