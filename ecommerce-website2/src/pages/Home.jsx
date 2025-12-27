import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from '../action/action';
import ProductCard from '../components/ProductCard';
import { Box, Grid, TextField } from '@mui/material';

const Home = () => {
  let dispatch = useDispatch();
  let items = useSelector(store => store.itemStore.items);
  let [displayItems, setDisplayItems ] = useState([]);

  let [search, setSearch] = useState('');


  useEffect(() => {
    if (items.length == 0) {
      dispatch(loadData());
    }
  }, []);

  useEffect(() => {
    setDisplayItems(
      items.filter(item => item.title.toLowerCase().match(search.toLowerCase()))
    );
  }, [search,items]);

  return (
    <>
      <Box width={'50%'} margin={'15px auto'}>
        <TextField component={'search'} fullWidth onChange={(e) => {
          setSearch(e.target.value);
        }}/>
      </Box>
      <Grid container padding={3}>
        {
          displayItems.map((product, i) => {
            return <Grid item xs={12} sm={6} md={4} lg={3} key={i} padding={2}><ProductCard product={product} /></Grid>
          })
        }
      </Grid >
    </>
  )
}

export default Home
