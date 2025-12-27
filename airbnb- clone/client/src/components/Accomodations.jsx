import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Perks from './Perks'
import { axiosIns } from '../utils/Axios'
import Places from './Places'

const Accomodations = ({ search }) => {
  let { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate()
  console.log(id)

  useEffect(() => {
    console.log('use Effect ran')
    if (!state) {
      setPlace({
        title: '',
        address: '',
        photos: [],
        description: '',
        price: 0,
        perks: [],
        extraInfo: '',
        checkIn: '',
        checkOut: '',
        maxGuests: 1
      })
      return;
    }
    setPlace(state)
  }, [id])

  const [place, setPlace] = useState({
    title: '',
    address: '',
    photos: [],
    description: '',
    perks: [],
    extraInfo: '',
    checkIn: '',
    checkOut: '',
    maxGuests: 1
  })
  const [link, setLink] = useState('');

  console.log(state)

  const handleChange = (e) => {
    setPlace(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const uploadByLink = (e) => {
    e.preventDefault();

    axiosIns.post('/uploadbylink', {
      link
    })
      .then(res => {
        setPlace({ ...place, photos: [...place.photos, res.data] });
        setLink('')
      })
      .catch(e => console.log(e))
  }

  const uploadImage = (e) => {
    console.log(e.target.files[0])
    const formData = new FormData()

    formData.append('images', e.target.files[0])

    axiosIns.post('/uploadimage', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(res => {
        setPlace({ ...place, photos: [...place.photos, res.data] });
      })
      .catch(e => console.log(e))
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (!id) {
      axiosIns.post('/addplace', place)
        .then(res => {
          console.log(res);
          navigate('/account/accomodations')
        })
        .catch(e => {
          console.log(e)
        })
    } else {
      axiosIns.put('/updateplace/' + id, place)
        .then(res => {
          console.log(res);
          navigate('/account/accomodations')
        })
        .catch(e => console.log(e))
    }
  }

  const handleImageDelete = (name) => {
    setPlace({...place, photos: place.photos.filter(photo => photo !== name)})
  }

  const handleFirstImage = (name) => {
    const filteredArray = place.photos.filter(photo => photo !== name);
    setPlace({...place, photos: [name, ...filteredArray]})
  }


  return (
    <div className='py-5'>
      {
        (!search && !id) && <>
          <div className='w-1/6 mx-auto'>
            <Link className='flex py-2 gap-1 rounded-full items-center bg-primary text-white justify-center' to={'/account/accomodations?new=true'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Create new Place
            </Link>
          </div>
          <Places />
        </>
      }

      {
        (search || id) && <>
          <form className='w-full flex flex-col gap-7' onSubmit={handleSubmit}>
            <div className='w-4/5 mx-auto flex flex-col gap-2'>
              <h2 className='text-2xl'>Title</h2>
              <p className='text-sm text-gray-500'>Title for your place should be short and catchy as in advertisement</p>
              <input type="text" placeholder='title, for example: My lovely apt' className='w-full' onChange={handleChange} name='title' value={place.title} />
            </div>
            <div className='w-4/5 mx-auto flex flex-col gap-2'>
              <h2 className='text-2xl'>Address</h2>
              <p className='text-sm text-gray-500'>Address to this place</p>
              <input type="text" placeholder='address' className='w-full' onChange={handleChange} name='address' value={place.address} />
            </div>
            <div className='w-4/5 mx-auto flex flex-col gap-2'>
              <h2 className='text-2xl'>Photos</h2>
              <p className='text-sm text-gray-500'>more=better</p>
              <div className='flex w-full gap-1'>
                <input type="text" placeholder='Add using a link ...jpg' className='flex-1' onChange={(e) => setLink(e.target.value)} value={link} />
                <button className='p-2 bg-gray-200 rounded-lg' onClick={uploadByLink}>Add photo</button>
              </div>
              <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-3'>
                {
                  place.photos.length > 0 && place.photos.map((imgName) => {
                    return <div className='h-32 w-full rounded-lg overflow-hidden relative' key={imgName}>
                      <img src={'http://localhost:5001/uploads/' + imgName} className='w-full h-full object-fit-cover' />
                      <div className='absolute bottom-2 right-2 bg-black p-1 bg-opacity-60 cursor-pointer' onClick={() => handleImageDelete(imgName)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </div>
                      <div className='absolute bottom-2 left-2 bg-black p-1 bg-opacity-60 cursor-pointer'>
                        {
                          imgName == place.photos[0] ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                          </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white" onClick={() => handleFirstImage(imgName)}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        }

                      </div>
                    </div>
                  })
                }
              </div>
              <label className='w-fit p-8 border border-gray-300 rounded-md text-gray-500 text-xl flex items-center gap-1'>
                <input type="file" style={{ display: 'none' }} onChange={uploadImage} multiple />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg>
                Upload
              </label>
            </div>
            <div className='w-4/5 mx-auto flex flex-col gap-2'>
              <h2 className='text-2xl'>Description</h2>
              <p className='text-sm text-gray-500'>Description of the place</p>
              <textarea type="text" placeholder='description' className='w-full h-20 rounded-lg resize-none' onChange={handleChange} name='description' value={place.description} />
            </div>
            <div className='w-4/5 mx-auto flex flex-col gap-2'>
              <h2 className='text-2xl'>Perks</h2>
              <p className='text-sm text-gray-500'>Select All the perks of this place</p>
              <Perks setPlace={setPlace} place={place} />
            </div>
            <div className='w-4/5 mx-auto flex flex-col gap-2'>
              <h2 className='text-2xl'>Extro Info</h2>
              <p className='text-sm text-gray-500'>House rules etc.</p>
              <textarea type="text" placeholder='extra info' className='w-full h-17 rounded-lg resize-none' onChange={handleChange} name='extraInfo' value={place.extraInfo} />
            </div>
            <div className='w-4/5 mx-auto flex flex-col gap-2'>
              <h2 className='text-2xl'>Check in & out times</h2>
              <p className='text-sm text-gray-500'>Add check in and out times, remember to have sometime window for cleaning the room between check in and out</p>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="">Check in time</label>
                  <input type="Number" className='w-full rounded-sm' placeholder='14' onChange={handleChange} name='checkIn' value={place.checkIn} />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="">Check out time</label>
                  <input type="Number" className='w-full rounded-sm' placeholder='22' onChange={handleChange} name='checkOut' value={place.checkOut} />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="">Max Guests</label>
                  <input type="Number" className='w-full rounded-sm' placeholder='eg: 20' onChange={handleChange} name='maxGuests' value={place.maxGuests} />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="">Price</label>
                  <input type="Number" className='w-full rounded-sm' placeholder='eg: $20' onChange={handleChange} name='price' value={place.price} />
                </div>
              </div>
              <button className='bg-primary text-white py-2 rounded-full mt-3'>Save</button>
            </div>
          </form>
        </>
      }

    </div>
  )
}

export default Accomodations
