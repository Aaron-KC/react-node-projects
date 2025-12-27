import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material"
import EditNoteIcon from '@mui/icons-material/EditNote';


const TodoItem = ({ todo, delTodo, editTodo }) => {
  return (
    <>
      <Grid container>
        <Grid item marginX={'auto'} xs={12} md={6} marginY={'10px'}>
          <Box width={'100%'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
            <Typography variant='h6' width={'24%'}>{todo.activity}</Typography>
            <Typography variant='h6' sx={{ margin: '0 20px' }}>{todo.date}</Typography>
            <Box display={'flex'} alignItems={'center'}>
              <EditNoteIcon sx={{ fontSize: '40px' }} onClick={() => {editTodo(todo.activity)}} />
              <Button variant="contained" color="error" sx={{ padding: '10px 30px' }} onClick={() => { delTodo(todo.activity) }}>Delete</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default TodoItem
