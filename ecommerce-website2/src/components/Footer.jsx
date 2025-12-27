import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Box bgcolor={'#ccc'} paddingY={3} textAlign={'center'}>
        &copy; CopyRight, {year}
      </Box>
    </>
  )
}

export default Footer
