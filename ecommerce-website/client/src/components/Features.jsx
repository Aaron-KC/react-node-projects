import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import getServices from '../utils/getServices'
import UseFetch from '../utils/hooks/UseFetch'

const Features = ({ feature, type }) => {
  const { items, loading, error } = UseFetch(`/products?populate=*&filters[type][$eq]=${type}`)
  return (
    <div className='py-9'>
      <div className='flex items-center md:pe-[100px] flex-wrap'>
        <h1 className='flex-[2] text-center text-xl font-bold'>{feature}</h1>
        <p className='flex-[6] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus provident perferendis nesciunt nihil iusto, dolorem autem ullam ipsam tempore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam nam ex unde minus distinctio rerum, labore officiis odio magnam?
        </p>
      </div>
      <div className='flex justify-center flex-wrap mt-5 gap-6 py-5'>
        {
          error ? 'Something Went Wrong!' : loading ? 'loading' :
            items?.map(item => {
              return <Card item={item} key={item.id} />
            })
        }
      </div>
    </div>
  )
}

export default Features
