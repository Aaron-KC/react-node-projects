import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Confirm = ({ handleIncrease, handleDecrease, info }) => {
  let { firstName, lastName, email, occupation, city, bio } = info
  return (
    <Box display={'flex'} width={'100%'} flexDirection={'column'} alignItems={'center'} gap={'10px'}>
      <Typography variant={'h6'}>First Name: <span style={{ color: '#424549' }}>{firstName}</span></Typography>
      <Typography variant={'h6'}>Last Name: <span style={{ color: '#424549' }}>{lastName}</span> </Typography>
      <Typography variant={'h6'}>Email: <span style={{ color: '#424549' }}>{email}</span> </Typography>
      <Typography variant={'h6'}>Occupation: <span style={{ color: '#424549' }}>{occupation}</span> </Typography>
      <Typography variant={'h6'}>City: <span style={{ color: '#424549' }}>{city}</span> </Typography>
      <Typography variant={'h6'}>Bio: <span style={{ color: '#424549' }}>{bio}</span> </Typography>

      <Box marginY={'10px'}>
        <Button variant='contained' size='large' onClick={handleIncrease}>CONTINUE</Button>
        <Button variant='contained' color='white' sx={{margin: '0 20px'}} size='large' onClick={handleDecrease}>BACK</Button>
      </Box>
    </Box>
  )
}

export default Confirm
