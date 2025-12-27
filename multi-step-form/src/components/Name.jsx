import { Button, TextField } from '@mui/material'
import React from 'react'

const Name = ({handleIncrease, handleStateChange, firstName, lastName, email}) => {
  return (
    <>
      <TextField fullWidth label='First Name' onChange={(e) => handleStateChange('firstName', e.target.value)} value={firstName} required/>
      <TextField fullWidth label='Last Name' sx={{margin: '20px 0'}} onChange={(e) => handleStateChange('lastName', e.target.value)} value={lastName} required/>
      <TextField fullWidth label='Email' onChange={(e) => handleStateChange('email', e.target.value)} value={email} required/>
      <Button variant='contained' sx={{margin: '20px 0'}} size='large' onClick={handleIncrease}>CONTINUE</Button>
    </>
  )
}

export default Name
