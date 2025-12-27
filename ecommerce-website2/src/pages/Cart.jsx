import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { change_quantity, remove_from_cart } from '../action/action';

const Cart = () => {
  let cartItems = useSelector(store => store.cartStore.cartItems);
  let dispatch = useDispatch();
  const handleDecrease = (cartItem) => e => {

    e.preventDefault();

    let quantity = cartItem.quantity - 1;
    console.log(quantity);

    if(quantity < 1) {
      Swal.fire({title: 'Oops!', text: 'The quantity cannot be made to 0 but the item can be removed from the cart', icon: 'warning', showCancelButton: true,cancelButtonText: 'No'})
        .then(result => {
          if(result.isConfirmed) {
            dispatch(remove_from_cart(cartItem));
          }
          else {
            Swal.fire('Cancelled!');
          }
        })
    }
    else {
      let changeItem = {...cartItem, quantity: cartItem.quantity - 1};
      dispatch(change_quantity(changeItem));
    }
  }

  const handleIncrease = (cartItem) => e => {

    e.preventDefault();

    let quantity = cartItem.quantity;

    if(quantity >= cartItem.stock) {
      Swal.fire('Oops!', `The stock limit is ${quantity}`, 'warning');
    }
    else {
      let changeItem = {...cartItem, quantity: cartItem.quantity + 1};
      dispatch(change_quantity(changeItem));
    }
  }

  const removeFromCart= (cartItem) => e => {
    e.preventDefault();
    Swal.fire('Warning!', 'Are you sure? You want to remove this item', 'warning')
      .then(result => {
        if(result.isConfirmed) {
          dispatch(remove_from_cart(cartItem));
        }
        else {
          Swal.fire('Deletion Cancelled');
        }

      })
  } 
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No.</TableCell>
              <TableCell align="center" colSpan={2}>Product</TableCell>
              <TableCell align="center">Unit Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((cartItem, i) => (
              <TableRow
                key={cartItem.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}.
                </TableCell>
                <TableCell align="right">
                  <img src={cartItem.image} style={{ height: '200px' }} />
                </TableCell>
                <TableCell align="center">{cartItem.title}</TableCell>
                <TableCell align="center">{cartItem.price}</TableCell>
                <TableCell align="center">
                  <Button variant='contained' color='error' onClick={handleDecrease(cartItem)}>-</Button>
                  <span style={{padding: '0 8px'}}>{cartItem.quantity}</span>
                  <Button variant='contained' color='success' onClick={handleIncrease(cartItem)}>+</Button>
                  </TableCell>
                <TableCell align="center">{(cartItem.quantity * cartItem.price)}</TableCell>
                <TableCell align="center">
                  <Button variant='contained' onClick={removeFromCart(cartItem)}>REMOVE</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Cart
