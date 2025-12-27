import React, { useState } from 'react'
import { Box, Button, Grid, TextField } from "@mui/material"
import Swal from 'sweetalert2';

const TodoInput = ({ addTodo, todovalue }) => {
  console.log(todovalue)
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  return (
    <>
      <Grid container>
        <Grid item marginX={'auto'} xs={12} md={6} marginY={'10px'}>
          <Box width={'100%'} display={'flex'} justifyContent={'space-evenly'}>
            <TextField label='Todo name' onChange={(e) => { setSearch(e.target.value) }} value={todovalue == ''? search: todovalue} />
            <input type="date" style={{ margin: '0 20px', padding: '0 20px' }} onChange={(e) => { setDate(e.target.value) }} value={date} />
            <Button variant="contained" color="success" sx={{ padding: '0 30px' }} onClick={() => { 
              if(search.trim()== '') {
                Swal.fire('Please enter a valid todo!')
              }
              else if(date.trim() == '') {
                Swal.fire('Enter a valid date!')
              }
              else {
                addTodo(search, date);
                setSearch('');
                 setDate(''); }}
              }
           >Add</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default TodoInput
