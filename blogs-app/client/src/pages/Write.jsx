import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Write = () => {
  const category = ['Art', 'Science', 'Technology', 'Cinema', 'Design', 'Food']
  const {state, search} = useLocation()
  const { user } = useContext(AuthContext)
  const [post, setPost] = useState({
    title: state?.title || '',
    category: state?.category || '',
    user: user._id,
    description: state?.description || ''
  })
  const [img, setImg] = useState(state?.img || null)
  const navigate = useNavigate()


  const handleChange = (e) => {
    setPost(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleUpload = async (e) => {
    let formData = new FormData()
    formData.append('file', img)

    const res = await axios.post('http://localhost:5001/api/posts/upload', formData)

    return res
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await handleUpload()

      if(!state) {
        await axios.post('http://localhost:5001/api/posts', { ...post, img: res?.data })
      } else {
        await axios.put(`http://localhost:5001/api/posts/${state._id}`, {...post, img: res?.data})
      }
      navigate('/')

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='w-full flex justify-center'>
      <div className='md:w-4/6 xs:w-full p-4 flex gap-2'>
        <div className='flex-[5] flex flex-col gap-4'>
          <input type="text" placeholder='Title' className='w-full p-2 bg-transparent outline-none rounded-sm border-gray-200 border-2 text-gray-500' name='title' onChange={handleChange} value={post.title}/>
          <div className="w-full h-[375px]">
            <textarea className='h-full p-4 w-full bg-transparent outline-none rounded-sm border-gray-200 border-2 text-gray-500 resize-none' name='description' onChange={handleChange} value={post.description} />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-3 py-2 px-4 rounded-sm border-gray-200 border-2">
            <h1 className='text-xl font-semibold'>Publish</h1>
            <p><span className='font-normal'>Status</span>: Draft</p>
            <p><span className='font-normal'>Visibility</span>: Public</p>
            <input type="file" id='file' name='img' onChange={(e) => setImg(e.target.files[0])} />
            <label htmlFor="file" className='cursor-pointer text-blue-700' style={{ textDecoration: 'underline' }}>Upload Image</label>
            <button className='px-2 py-1 bg-green-600 text-white' onClick={handleSubmit}>
              {search ? 'UPDATE': 'ADD'}
            </button>
          </div>
          <div className="flex flex-col gap-3 py-2 px-4 rounded-sm border-gray-200 border-2">
            <h1 className='text-xl font-semibold'>Category</h1>
            {
              category.map((category, index) => {
                return <div className='flex gap-2' key={index}>
                  <input type="radio" id={category} name='category' onChange={handleChange} value={category.toLowerCase()} checked={category.toLowerCase() == post.category}/>
                  <label htmlFor={category} className='cursor-pointer'>{category}</label>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
