import React, { useState } from 'react'
import Header from './Header'
import Name from './Name'
import { Box } from '@mui/material'
import Bio from './Bio'
import Confirm from './Confirm'
import Success from './Success'

const Form = () => {
  const [info, setInfo] = useState({
    page: 1,
    headerInfo: 'Enter User Details',
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  })
  let { page, headerInfo, firstName, lastName, email, occupation, city, bio } = info

  const handleIncrease = () => {
    if(checkEmptyInput()) {
      let headerInfo = handleHeaderInfo(info.page + 1)
      setInfo({ ...info, page: info.page + 1, headerInfo: headerInfo })
    }
    else {
      alert('Fill Out Required Forms')
    }
  }
  const handleDecrease = () => {
      let headerInfo = handleHeaderInfo(info.page - 1)
      setInfo({ ...info, page: info.page - 1, headerInfo: headerInfo })
  }

  const handleStateChange = (name, value) => {
    setInfo({ ...info, [name]: value })
  }
  const handleHeaderInfo = (page) => {
    let headerInfo = null;
    switch (page) {
      case 1:
        headerInfo = 'Enter User Details'
        break;
      case 2:
        headerInfo = 'Enter Personal Details'
        break;
      case 3:
        headerInfo = 'Confirm'
        break;
      case 4:
        headerInfo = 'Success'
        break;
      default:
        return
    }
    return headerInfo;
  }
  function checkEmptyInput() {
    const { page, firstName, lastName, email, occupation, city, bio } = info;
    if(page == 1) {
      return [firstName, lastName, email].every(field => field.trim() !== '');
    }
    else if (page == 2) {
      return [occupation, city, bio].every(field => field.trim() !== '');
    }
    return true
  }
  
  console.log(info)
  return (
    <>
      <Header headerInfo={headerInfo}/>
      {/* <Box width={'100%'} bgcolor={'primary.light'} minWidth={'400px'} display={'flex'} justifyContent={'center'} marginY={'30px'}> */}
      <Box width={'400px'} marginX={'auto'} marginY={'20px'} padding={3} textAlign={'center'}>
        {
          (() => {
            switch (page) {
              case 1:
                return <Name handleIncrease={handleIncrease} handleStateChange={handleStateChange} firstName={firstName} lastName={lastName} email={email} />
              case 2:
                return <Bio handleIncrease={handleIncrease} handleDecrease={handleDecrease} handleStateChange={handleStateChange} occupation={occupation} city={city} bio={bio} />
              case 3:
                return <Confirm handleIncrease={handleIncrease} handleDecrease={handleDecrease} info={info} />
              case 4:
                return <Success />
              default:
                return null;
            }
          })()
        }
      </Box>
    </>
  )
}

export default Form
