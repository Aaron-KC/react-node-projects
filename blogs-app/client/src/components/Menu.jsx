import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPost = async () => {
     const res =  await axios.get('http://localhost:5001/api/posts?cat=' + cat)
     setPosts(res?.data)
    }
    getPost()
  }, [cat])
  
  return (
    <div className='w-full flex flex-col gap-10'>
      {
        posts.map(post => {
          return <div className='flex gap-2 flex-col' key={post._id}>
            <img src={`/public/uploads/${post?.img}`} className='h-[200px] w-full object-cover' />
            <h1 className='font-semibold leading-normal text-2xl'>{post?.title}</h1>
            <Link to={`/post/${post?._id}`}>
              <button className='w-fit px-3 py-1 border-2 border-teal-700 text-teal-700 bg-white rounded-sm hover:bg-teal-700 hover:text-white'>Read More</button>
            </Link>
          </div>
        })
      }
    </div>
  )
}

export default Menu
