import React, { useContext, useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaTrash } from 'react-icons/fa'
import Menu from '../components/Menu'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/AuthContext'

const Post = () => {
  const [posts, setPosts] = useState({})

  const param = useLocation().pathname.split('/')[2]
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5001/api/posts/${param}`)
      setPosts(res?.data)
    }
    getPost()
  }, [param])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5001/api/posts?postId=${param}&userId=${user?._id}`)
      navigate('/')
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <div className='w-full flex justify-center'>
      <div className='md:w-4/6 xs:w-full p-4 flex gap-7'>
        <div className='flex-[3] flex flex-col gap-6'>
          <img src={`/public/uploads/${posts?.img}`} alt="" className='w-full h-[380px] object-cover' />
          <div className="flex gap-3 items-center">
            {
              posts?.user?.img && <img src="aa" alt="" className='h-[30px] w-[30px] object-cover rounded-full' />
            }
            <div className="flex flex-col">
              <h1 className='font-bold'>{posts?.user?.username}</h1>
              <span className='text-gray-800 text-sm'>Posted {moment(posts.createdAt).fromNow()}</span>
            </div>
            <div className="flex gap-2">
              {
                user?._id == posts?.user?._id && <>
                  <span className='h-[25px] w-[25px] rounded-full bg-teal-500 flex justify-center items-center'>
                    <Link to={'/write?edit=true'} state={posts}>
                      <CiEdit className='text-white cursor-pointer' />
                    </Link>
                  </span>
                  <span className='h-[25px] w-[25px] rounded-full bg-red-500 flex justify-center items-center'>
                    <FaTrash className='text-white cursor-pointer text-xs' onClick={() => handleDelete()}/>
                  </span>
                </>
              }

            </div>
          </div>
          <h1 className='text-5xl font-bold leading-normal'>{posts?.title}</h1>
          <p className='leading-loose text-justify'>{posts?.description}</p>
        </div>
        <div className='flex-1'>
          <h1 className='text-lg font-semibold mb-6'>Other posts you may like</h1>
          <Menu cat={posts.category} />
        </div>
      </div>
    </div>
  )
}

export default Post
