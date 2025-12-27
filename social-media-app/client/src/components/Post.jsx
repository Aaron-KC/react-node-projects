import React, { useState } from 'react'
import { BiCommentDetail } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from 'react-icons/io5';
import Comments from './Comments';
import { Link } from 'react-router-dom';
import moment from 'moment'

const Post = ({ post }) => {
  console.log(post)
  const [comment, setComment] = useState(false)
  const [like, setLike] = useState(false)
  return (
    <div className='my-2 p-3 bg-white dark:bg-[#222] flex flex-col gap-2 rounded-md'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img src={post.profilePic} className='h-[30px] w-[30px] rounded-full' />
          <div className='flex flex-col'>
            <Link to={`/posts/${post.userId}`}>
              <span className='text-sm font-bold text-black dark:text-[whitesmoke]'>{post.name}</span>
            </Link>
            <span className='text-[11px] text-[#555] dark:text-lightgray text-bold'>{moment(post?.createdAt).fromNow()}</span>
          </div>
        </div>
        <BsThreeDots className='text-black dark:text-[whitesmoke]' />
      </div>
      <p className='text-sm  text-black dark:text-[whitesmoke]'>{post.desc}</p>
      {
        post?.img && <div className='w-full h-[400px]'>
          <img src={'/uploads/'+ post.img} className='w-full h-full object-cover' />
        </div>
      }
      <div className='py-3 flex gap-3'>
        <div className='flex gap-1 items-center'>
          {like? <FaHeart className='text-xl text-black dark:text-[whitesmoke]' onClick={() => setLike(!like)} /> : <CiHeart className='text-xl text-black dark:text-[whitesmoke]' onClick={() => setLike(!like)}/>}
          <span className='text-black dark:text-[whitesmoke] text-sm'>12 Likes</span>
        </div>
        <div className='flex gap-1 items-center' onClick={() => setComment(!comment)}>
          <BiCommentDetail className='text-lg text-black dark:text-[whitesmoke]' />
          <span className='text-black dark:text-[whitesmoke] text-sm'>12 Comments</span>
        </div>
        <div className='flex gap-1 items-center'>
          <IoShareSocial className='text-lg text-black dark:text-[whitesmoke]' />
          <span className='text-black dark:text-[whitesmoke] text-sm'>12 Shares</span>
        </div>
      </div>
      {
        comment && <Comments />
      }
    </div>
  )
}

export default Post
