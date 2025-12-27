import { Button, TextField } from '@mui/material'
import React from 'react'

const Bio = ({handleIncrease, handleDecrease, handleStateChange, occupation, city, bio}) => {
  return (
    <>
       <TextField fullWidth label='Occupation' onChange={(e) => handleStateChange('occupation', e.target.value)} value={occupation} required/>
      <TextField fullWidth label='City' sx={{margin: '20px 0'}} onChange={(e) => handleStateChange('city', e.target.value)} value={city} required/>
      <TextField fullWidth label='Bio' onChange={(e) => handleStateChange('bio', e.target.value)} value={bio} required/>
      <Button variant='contained' sx={{margin: '20px 0'}} size='large' onClick={handleIncrease}>CONTINUE</Button>
      <Button variant='contained' color='white' sx={{margin: '20px 20px'}} size='large' onClick={handleDecrease}>BACK</Button>
    </>
  )
}

export default Bio
