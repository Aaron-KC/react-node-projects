import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {
  let userReducer = (state, payload) => {
    return {
      ...state, [payload.target.name]: payload.target.value
    }
  }
  const navigate = useNavigate();
  let [person, setPerson] = useReducer(userReducer, JSON.parse(localStorage.getItem('userInfo')) || {});

  const handleChange = () => {
    if(!person.username || !person.email || !person.password) {
      Swal.fire('Alert!', 'Please fill out all the forms', 'warning');
    }
   else {
    localStorage.setItem('userInfo', JSON.stringify(person));
    navigate('/');
   }
  }
  return (
    <>
      <Typography fontSize={'30px'} textAlign={'center'} sx={{textDecoration: 'underline'}} marginTop={'20px'}>LOGIN</Typography>
      <Box p={3} mx={'auto'} marginY={'30px'} width={'35%'} boxShadow={'0 0 30px 5px gray'}>
        <TextField label='username' fullWidth onChange={setPerson} name='username'/>
        <TextField label='email' fullWidth sx={{margin: '20px 0'}} onChange={setPerson} name='email' />
        <TextField label='password' fullWidth onChange={setPerson} name='password' />
        <Button variant='contained' fullWidth sx={{marginTop: '20px'}} onClick={handleChange}>Login</Button>
      </Box>
    </>
  )
}

export default Login
