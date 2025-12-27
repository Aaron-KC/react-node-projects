import { TextField } from '@mui/material'
import React from 'react'

const Search = ({handleState}) => {
  return (
    <div style={{padding: '0 10px'}}>
      <TextField variant='standard' label={'Search For Images'} fullWidth onChange={(e) => handleState('search', e.target.value) }/> 
    </div>
  )
}

export default Search
