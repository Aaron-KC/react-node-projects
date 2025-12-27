import React from 'react'

const RightBar = () => {
  return (
    <div className='flex-[3] p-3 bg-[#f6f3f3] dark:bg-[#333] rightbar overflow-y-scroll'>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 bg-white  dark:bg-[#222] p-2 pb-4 rounded-md">
          <span className='dark:text-[lightgray] text-[#555] font-normal'>Suggestions For You</span>
          <div className='py-1 flex gap-3 font-semibold items-center dark:text-[whitesmoke] justify-between'>
            <div className='flex gap-3 items-center'>
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
              <span className='text-sm font-bold'>John Doe</span>
            </div>
            <div className='flex gap-2'>
              <button className='p-1 bg-[skyblue] text-white'>follow</button>
              <button className='p-1 bg-red-400 text-white'>Dismiss</button>
            </div>
          </div>
          <div className='py-1 flex gap-3 font-semibold items-center dark:text-[whitesmoke] justify-between'>
            <div className='flex gap-3'>
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
              <span className='text-sm font-bold'>John Doe</span>
            </div>
            <div className='flex gap-2'>
              <button className='p-1 bg-[skyblue] text-white'>follow</button>
              <button className='p-1 bg-red-400 text-white'>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-2 bg-white  dark:bg-[#222] p-2 pb-4 rounded-md">
          <span className='dark:text-[lightgray] text-[#555] font-normal'>Latest Activities</span>
          <div className='py-1 flex gap-3 font-semibold items-center dark:text-[whitesmoke] justify-between'>
            <div className='flex gap-3'>
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
              <div className='flex items-center gap-1'>
                <span className='text-sm font-bold'>John Doe</span>
                <span className='text-sm dark:text-[lightgray] text-[#555]'>changed their cover picture</span>
              </div>
            </div>
            <span className='dark:text-[lightgray] text-[#555] text-sm'>
              1 min ago
            </span>
          </div>
          <div className='py-1 flex gap-3 font-semibold items-center dark:text-[whitesmoke] justify-between'>
            <div className='flex gap-3'>
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
              <div className='flex items-center gap-1'>
                <span className='text-sm font-bold'>John Doe</span>
                <span className='text-sm dark:text-[lightgray] text-[#555]'>liked a post</span>
              </div>
            </div>
            <span className='dark:text-[lightgray] text-[#555] text-sm'>
              1 min ago
            </span>
          </div>
          <div className='py-1 flex gap-3 font-semibold items-center dark:text-[whitesmoke] justify-between'>
            <div className='flex gap-3'>
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
              <div className='flex items-center gap-1'>
                <span className='text-sm font-bold'>John Doe</span>
                <span className='text-sm dark:text-[lightgray] text-[#555]'>liked a comment</span>
              </div>
            </div>
            <span className='dark:text-[lightgray] text-[#555] text-sm'>
              1 min ago
            </span>
          </div>
          <div className='py-1 flex gap-3 font-semibold items-center dark:text-[whitesmoke] justify-between'>
            <div className='flex gap-3'>
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
              <div className='flex items-center gap-1'>
                <span className='text-sm font-bold'>John Doe</span>
                <span className='text-sm dark:text-[lightgray] text-[#555]'>posted</span>
              </div>
            </div>
            <span className='dark:text-[lightgray] text-[#555] text-sm'>
              1 min ago
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-2 bg-white  dark:bg-[#222] p-2 pb-4 rounded-md">
          <span className='dark:text-[lightgray] text-[#555] font-normal'>Suggestions For You</span>
          <div className='flex gap-3 items-center relative py-2'>
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
              <span className='text-sm font-bold dark:text-[whitesmoke]'>John Doe</span>
              <span className='h-3 w-3 bg-green-600 rounded-full absolute top-2 left-4'></span>
            </div>
          <div className='flex gap-3 items-center relative py-2'>
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
              <span className='text-sm font-bold dark:text-[whitesmoke]'>John Doe</span>
              <span className='h-3 w-3 bg-green-600 rounded-full absolute top-2 left-4'></span>
            </div>
          <div className='flex gap-3 items-center relative py-2'>
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[25px] w-[25px] rounded-full object-fit' />
              <span className='text-sm font-bold dark:text-[whitesmoke]'>John Doe</span>
              <span className='h-3 w-3 bg-green-600 rounded-full absolute top-2 left-4'></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
