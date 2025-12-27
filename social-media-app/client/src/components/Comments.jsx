import React from 'react'

const Comments = () => {
  return (
    <div className='py-2'>
      <div className='w-full py-1 flex gap-1 items-center'>
        <img src="" alt="" className='h-[30px] w-[30px] rounded-full' />
        <input type="text" placeholder='Write a comment' className='flex-[5] outline-none ps-1 pe-3 py-1 border border-[#d3d3d3] dark:border-[#444] rounded-md bg-transparent dark:text-white' />
        <button className='bg-black dark:bg-white text-white dark:text-black p-1 rounded-sm'>Send</button>
      </div>
      <div className='flex gap-3 py-2'>
        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
        <div className='flex flex-col'>
          <span className='text-sm font-bold dark:text-[whitesmoke]'>John Doe</span>
          <span className='text-sm dark:text-[lightgray] text-[#555]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, tenetur.</span>
        </div>
        <div className='h-full'>
          <span className='dark:text-[lightgray] text-[#555] text-[12px] self-center'>1 hour ago</span>
        </div>
      </div>
      <div className='flex gap-3 py-2'>
        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
        <div className='flex flex-col'>
          <span className='text-sm font-bold dark:text-[whitesmoke]'>John Doe</span>
          <span className='text-sm dark:text-[lightgray] text-[#555]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, tenetur.</span>
        </div>
        <div className='h-full'>
          <span className='dark:text-[lightgray] text-[#555] text-[12px] self-center'>1 hour ago</span>
        </div>
      </div>
    </div>
  )
}

export default Comments
