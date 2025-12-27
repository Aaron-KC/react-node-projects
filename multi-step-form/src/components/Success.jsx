import { Typography } from '@mui/material'
import React from 'react'

const Success = () => {
  return (
    <>
      <Typography variant='h5' fontWeight={'bold'}>
        Thank You For Your Submission!
      </Typography>
      <Typography color='#424549' sx={{margin: '10px 0'}}>
        You will get an email with further instructions
      </Typography>
    </>
  )
}

export default Success
