import React from 'react'

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  return (
    <div className='h-[200px] w-full flex gap-1 flex-shrink-0 overflow-scroll'>
      <div className='h-full rounded-lg overflow-hidden relative'>
        <img src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className='h-full w-[150px] object-cover' />
        <span className='absolute bottom-2 left-2 text-white dark:text-[whitesmoke]'>Your Story</span>
        <span className='h-4 w-4 rounded-full bg-[#5271ff] text-xl absolute bottom-9 left-2 flex justify-center items-center p-3  text-white dark:text-[whitesmoke]'>+</span>
      </div>
      {
        stories.map(story => {
          return <div className='h-full rounded-lg overflow-hidden relative' key={story.id}>
            <img src={story.img} className='h-full w-[150px] object-cover' />
            <span className='absolute bottom-2 left-2 text-white dark:text-[whitesmoke]'>{story.name}</span>
          </div>
        })
      }
    </div>
  )
}

export default Stories
