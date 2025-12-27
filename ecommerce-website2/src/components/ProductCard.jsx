import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Rating, TextField } from '@mui/material';
import { Euro, ShoppingCart } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../action/action';
import Swal from 'sweetalert2';


export default function ProductCard({ product }) {

  let dispatch = useDispatch();

  const addToCart = () => {
    let cartItem = {
      title: product.title,
      image: product.images[0],
      price: product.price,
      stock: product.stock,
      quantity: 1,
      id: new Date().getTime()
    }

    Swal.fire({
      title: 'Cart',
      text: 'Do you want to add the item to cart?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Add To Cart'
    })
      .then((result) => {
        if(result.isConfirmed) {
          dispatch(add_to_cart(cartItem));
        }
        else {
          Swal.fire('Item was not added to cart!');
        }
      });

  }
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.images[0]}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Price: ${product.price}
        </Typography>
        <Rating value={product.rating} readOnly></Rating>
        <Typography gutterBottom variant="h5" component="div">
          In Stock: {product.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<ShoppingCart />} onClick={addToCart}>ADD TO CART</Button>
        <Button size="small" endIcon={<Euro />}>BUY NOW</Button>
      </CardActions>
    </Card>
    </>
  );
}
