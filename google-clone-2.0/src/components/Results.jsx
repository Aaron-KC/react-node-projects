import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MyContext } from '../context/MyContext';
import ReactPlayer from 'react-player';
import Loader from './Loader';

const Results = () => {
  const { pathname } = useLocation();
  const { getData, data, search, isLoading } = useContext(MyContext)
  useEffect(() => {
    getData(pathname, search)
  }, [pathname, search])
  console.log(data)
  if (isLoading) {
    return <div className='min-h-[90vh] flex justify-center items-center'>
      <Loader/>
    </div>
  }
  switch (pathname) {
    case '/':
      return <>
        <div className="grid xl:grid-cols-2 bg-gray-100 dark:bg-gray-900 lg:ps-56 py-5">
          {
            data?.result?.length > 0 && data?.result.map((item, index) => {
              return <div className='p-2' key={index}>
                <p className='text-md text-gray-500 w-full truncate dark:text-gray-50'>
                  {item.href}
                </p>
                <a href={item.href} target='_blank' key={item.href} className='text-blue-900 text-lg w-full truncate dark:text-blue-600'>
                  {item.title}
                </a>
              </div>
            })
          }
        </div>
      </>
    case '/news':
      return <>
        <div className="grid bg-gray-100 dark:bg-gray-900 lg:ps-48 py-5">
          {
            data?.news?.length > 0 && data?.news.map((item, index) => {
              return <div className='p-3 lg:w-3/5 flex justify-between items-start w-[100%]' key={index}>
                <div className='w-[90%]'>
                  <a href={item.url} target='_blank' key={item.href} className='text-blue-900 text-2xl w-full dark:text-blue-600 hover:underline'>
                    {item.title}
                  </a>
                  <p className='text-md text-gray-500 w-full dark:text-gray-50'>
                    {item.url}
                  </p>
                </div>
                <img src={item.image == '' ? './vite.svg' : item.image} alt="" className='h-[100px] w-[100px] object-cover rounded-lg' />
              </div>
            })
          }
        </div>
      </>
    case '/image':
      return <>
        <div className="flex flex-wrap p-5 dark:bg-gray-900 justify-center gap-6">
          {
            data?.result?.map((item, i) => {
              return <div className='flex flex-col items-start max-w-52' key={i}>
                <a href={item.url} target='_blank'>
                  <img src={item.image} alt="" className='object-contain max-h-52' />
                </a>
                <a href={item.url} target='_blank' key={item.source} className='text-blue-800 text-lg w-full hover:underline dark:text-gray-50 truncate'>
                  {item.title}
                </a>
                <p className='text-md text-gray-500 w-full dark:text-gray-50 truncate'>
                  {item.url}
                </p>
              </div>
            })
          }
        </div>
      </>
    case '/video':
      return <>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 dark:bg-gray-900">
          {
            data?.result?.map((item, i) => {
              return <div className='p-2 w-full' key={item.content}>
                <ReactPlayer url={item?.content} playing={false} controls={true} height='250px' width='100%' key={i} />
              </div>
            })
          }
        </div>
      </>
  }
}

export default Results
