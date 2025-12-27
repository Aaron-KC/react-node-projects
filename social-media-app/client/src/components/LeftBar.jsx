import { useContext } from "react"
import { AuthContext } from "../context/authContext"

const LeftBar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='pt-4 ps-2 flex-[2] bg-white  dark:bg-[#222] leftbar overflow-y-scroll'>
      <div className="flex flex-col gap-3 dark:text-[whitesmoke]">
        <div className='py-1 flex gap-3 font-semibold items-center dark:text-[whitesmoke]'>
          <img src={currentUser?.img} className='h-[25px] w-[25px] rounded-full object-fit' />
          <span className='text-md'>{currentUser?.username}</span>
        </div>
        <div className='py-1 flex gap-3 font-semibold items-center'>
          <img src="/1.png" className='h-[25px] w-[25px] rounded-full object-fit' />
          <span className='text-md'>Friends</span>
        </div>
        <div className='py-1 flex gap-3 font-semibold items-center'>
          <img src="/2.png" className='h-[25px] w-[25px] rounded-full object-fit' />
          <span className='text-md'>Groups</span>
        </div>
        <div className='py-1 flex gap-3 font-semibold items-center'>
          <img src="/3.png" className='h-[25px] w-[25px] rounded-full object-fit' />
          <span className='text-md'>Marketplace</span>
        </div>
        <div className='py-1 flex gap-3 font-semibold items-center'>
          <img src="/4.png" className='h-[25px] w-[25px] rounded-full object-fit' />
          <span className='text-md'>Watch</span>
        </div>
        <div className='py-1 flex gap-3 font-semibold items-center'>
          <img src="/5.png" className='h-[25px] w-[25px] rounded-full object-fit' />
          <span className='text-md'>Memories</span>
        </div>
        <div className='hr my-4 dark:bg-[#444]'></div>
        <div className='flex flex-col gap-3 dark:text-[whitesmoke]'>
          <span className='text-gray text-sm font-semibold py-1 dark:text-[lightgray] text-[#555]'>Your shortcuts</span>
          <div className='py-1 flex gap-3 font-semibold items-center'>
            <img src="/6.png" className='h-[25px] w-[25px] rounded-full object-fit' />
            <span className='text-md'>Events</span>
          </div>
          <div className='py-1 flex gap-3 font-semibold items-center'>
            <img src="/7.png" className='h-[25px] w-[25px] rounded-full object-fit' />
            <span className='text-md'>Gaming</span>
          </div>
          <div className='py-1 flex gap-3 font-semibold items-center'>
            <img src="/8.png" className='h-[25px] w-[25px] rounded-full object-fit' />
            <span className='text-md'>Gallery</span>
          </div>
          <div className='py-1 flex gap-3 font-semibold items-center'>
            <img src="/9.png" className='h-[25px] w-[25px] rounded-full object-fit' />
            <span className='text-md'>Videos</span>
          </div>
          <div className='py-1 flex gap-3 font-semibold items-center'>
            <img src="/10.png" className='h-[25px] w-[25px] rounded-full object-fit' />
            <span className='text-md'>Messages</span>
          </div>
        </div>
        <div className='hr my-4 dark:bg-[#444]'></div>
        <div className='flex flex-col gap-3 dark:text-[whitesmoke]'>
          <span className='text-gray text-sm font-semibold py-1 dark:text-[lightgray] text-[#555]'>Others</span>
          <div className='py-1 flex gap-3 font-semibold items-center'>
            <img src="/11.png" className='h-[25px] w-[25px] rounded-full object-fit' />
            <span className='text-md'>fundraiser</span>
          </div>
          <div className='py-1 flex gap-3 font-semibold items-center'>
            <img src="/12.png" className='h-[25px] w-[25px] rounded-full object-fit' />
            <span className='text-md'>Tutorials</span>
          </div>
          <div className='py-1 flex gap-3 font-semibold items-center'>
            <img src="/13.png" className='h-[25px] w-[25px] rounded-full object-fit' />
            <span className='text-md'>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
