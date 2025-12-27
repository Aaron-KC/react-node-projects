import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useMutation, useQueryClient } from 'react-query';
import { makeRequest } from '../Axios';



const Share = () => {
  const queryClient = useQueryClient();
  const {currentUser} = useContext(AuthContext)
  const [file, setFile] = useState(null)
  const [desc, setDesc] = useState('')

  const mutation = useMutation(newPost => {
    return makeRequest.post('/posts', newPost)
  }, {
    onSuccess: queryClient.invalidateQueries('posts')
  })
  const handlePost = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    console.log(formData)
    const res = await makeRequest.post('/upload', formData)
    mutation.mutate({desc, img: res?.data})
    setDesc('')
  }
  return (
    <div className='mt-2 p-3 bg-white dark:bg-[#222] flex flex-col gap-2 rounded-lg'>
      <div className='flex gap-2 items-center'>
        <img src={currentUser?.profilePic} alt="" className='h-[30px] w-[30px] rounded-full' />
        <input type="text" placeholder={`What's on your mind ${currentUser?.username}`} className='flex-1 outline-none' onChange={(e) => setDesc(e.target.value)} value={desc}/>
      </div>
      <div className='hr mt-8 mb-4 dark:bg-[#444]'></div>
      <div className='flex justify-between'>
        <label htmlFor="image">Add Image</label>
        <input type="file" id='image' style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])}/>
        <button className='bg-blue-500 py-1 text-white px-2' onClick={handlePost}>Share</button>
      </div>
    </div>
  )
}

export default Share
