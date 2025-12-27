import React from 'react'
import { CiGlobe } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { FaRegEnvelope } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs'
import Posts from '../components/Posts';
import Post from '../components/Post';


const Profile = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <>
      <div className='flex-[5] bg-[#f6f3f3] dark:bg-[#333] '>
        <div className='w-full h-[300px] ps-2 relative'>
          <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-full h-full object-cover' />
          <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-[200px] h-[200px] object-cover rounded-full absolute left-0 right-0 top-[200px] mx-auto' />
        </div>
        <div className='px-10 py-2'>
          <div className='h-[300px] w-full px-3 flex items-center justify-between bg-white rounded-xl dark:bg-[#222]'>
            <div className="flex gap-2 text-2xl">
              <a href="http://facebook.com">
                <FaFacebook fontSize="large" className='text-2xl dark:text-[lightgray]' />
              </a>
              <a href="http://facebook.com">
                <FaInstagram fontSize="large" className='text-2xl dark:text-[lightgray]' />
              </a>
              <a href="http://facebook.com">
                <FaTwitter fontSize="large" className='text-2xl dark:text-[lightgray]' />
              </a>
              <a href="http://facebook.com">
                <FaLinkedin fontSize="large" className='text-2xl dark:text-[lightgray]' />
              </a>
              <a href="http://facebook.com">
                <FaPinterest fontSize="large" className='text-2xl dark:text-[lightgray]' />
              </a>
            </div>
            <div className='flex flex-col text-center gap-1 ms-[-90px]'>
              <h1 className='text-2xl font-bold dark:text-white'>Jane Doe</h1>
              <div className="flex gap-5 dark:text-[lightgray]">
                <div className='flex gap-1 items-center'>
                  <ImLocation2 className='text-xl font-bold' />
                  <span className='text-sm'>USA</span>
                </div>
                <div className='flex gap-1 items-center'>
                  <CiGlobe className='text-xl font-bold' />
                  <span className='text-sm'>Our Socials.</span>
                </div>
              </div>
              <button className='dark:text-[white]'>Follow</button>
            </div>
            <div className="flex gap-3 dark:text-[lightgray] text-xl">
              <FaRegEnvelope />
              <BsThreeDots />
            </div>
          </div>
          {
            posts.map(post => <Post post={post} /> )
          }
        </div>
      </div>

    </>

  )
}

export default Profile
