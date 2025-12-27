import React, { useContext } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { axiosIns } from '../utils/Axios';
import Accomodations from '../components/Accomodations';
import Buttons from '../components/Buttons';


const Account = () => {
  const {auth, setAuth} = useContext(AuthContext)
  let {subCat}= useParams()
  let {search} = useLocation()
  const navigate= useNavigate();


  if(subCat === undefined && !search) {
    subCat = 'profile';
  }

  const generateClasses = (type) => {
    let classes = 'flex px-6 py-2 gap-1 rounded-full items-center '

    if(type === subCat) {
      classes += 'bg-primary text-white'
    } else {
      classes += 'bg-gray-200'
    }
    return classes;
  }

  const signOut = () => {
    axiosIns.get('/user/logout')
    .then(() => {
      setAuth(null)
      navigate('/')
    })
    .catch(e => console.log(e))
  }

  return (
    <div className='py-3'>
        <Buttons generateClasses={generateClasses}/>
      {
        subCat === 'profile' && <div className='w-1/6 border p-3 my-5 mx-auto rounded-lg flex flex-col gap-2'>
          <h1>Logged In as <span className='font-bold'>{auth?.username}</span></h1>
          <button className='bg-primary px-6 py-1 rounded-full text-white' onClick={signOut}>Log Out</button>
        </div>
      }
      {
        subCat === 'accomodations' && <Accomodations search={search}/>
      }
    </div>
  )
}

export default Account
