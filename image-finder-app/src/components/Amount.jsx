import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const currencies = [
  {
    value: '5',
  },
  {
    value: '10',
  },
  {
    value: '15',
  },
  {
    value: '20',
  },
];

const Amount = ({handleState}) => {
  return (
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        marginY={'20px'}
      >
        <TextField
          id="outlined-select-currency"
          select
          label="Amount"
          defaultValue="5"
          helperText="Number Of Pictures"
          onChange={(e) => handleState('amount', e.target.value)}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Box>
  )
}

export default Amount
