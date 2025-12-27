import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'

const Home = () => {
  const [posts, setPosts] = useState([])

  const query = useLocation().search

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/posts${query}`)
        setPosts(res?.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPosts()
  }, [query])


  return (
    <div className='w-full flex justify-center'>
      <div className='md:w-4/6 xs:w-full p-4'>
        <div className="flex gap-6 flex-col">
          {

            posts?.length > 0 && posts?.map(post => {
              return <div className='flex gap-8 w-full py-16 flex-col lg:flex-row even:flex-col lg:even:flex-row-reverse' key={post._id}>
                <div className='flex-[2] flex flex-col justify-between'>
                  <h1 className="text-5xl font-bold leading-snug">
                    {post.title}
                  </h1>
                  <p className='text-gray-700 font-light'>{post?.description}</p>
                  <Link to={`/post/${post._id}`}>
                    <button className='w-fit p-3 border-2 border-teal-700 text-teal-700 bg-white rounded-sm hover:bg-teal-700 hover:text-white'>Read More</button>
                  </Link>
                </div>
                <div className="flex-1">
                  <img src={`/public/uploads/${post?.img}`} className='w-[300px] xl:w-full mx-auto xl:mx-0 h-[300px] object-cover' />
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
