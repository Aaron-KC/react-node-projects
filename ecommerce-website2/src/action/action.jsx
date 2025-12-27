import Swal from 'sweetalert2';

export const change_quantity = (item) => async(dispatch, getState) => {
  try {
    await dispatch({type: 'UPDATE_CART', payload: item});
    localStorage.setItem('cartItems', JSON.stringify(getState().cartStore.cartItems));
  }
  catch(error){
    console.log(error);
  }
}

export const remove_from_cart = (item) => async(dispatch, getState) => {
  try {
    await dispatch({type: 'REMOVE_FROM_CART', payload: item});
    Swal.fire('Success!', 'Cart Item was removed!', 'success');
    localStorage.setItem('cartItems', JSON.stringify(getState().cartStore.cartItems));

  }
  catch(error){
    console.log(error);
  }
}

export const add_to_cart = (item) => async (dispatch, getState) => {
  let cart_item = getState().cartStore.cartItems;
  let findExistingItem = cart_item.find(cartItem => {
    return item.title == cartItem.title
  });

  if (findExistingItem) {
    Swal.fire({
      title: 'Cart',
      text: 'Item already exists in the Cart. Do you want to increase its quantity ?',
      icon: 'question',
      showCancelButton: true
    })
      .then(async (result) => {
        if(result.isConfirmed) {
          let cartItem = { ...item, quantity: findExistingItem.quantity + 1 }
          console.log(cartItem);
          await dispatch({ type: 'UPDATE_CART', payload: cartItem });
          localStorage.setItem('cartItems', JSON.stringify(getState().cartStore.cartItems))
          Swal.fire('Cart', 'Quantity Increased successfully !', 'success')
        }
        else {
          Swal.fire('Cancelled!');
        }
      });
  }
  else {
    try {
      await dispatch({ type: 'ADD_TO_CART', payload: item })
      localStorage.setItem('cartItems', JSON.stringify(getState().cartStore.cartItems))
      Swal.fire('Cart', 'Added to Cart successfully !', 'success')
    }
    catch (error) {
      console.log(error);
    }
  }
}

export const loadData = () => async (dispatch, getState) => {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const result = await response.json();
    dispatch({ type: 'LOAD_DATA', payload: result.products });
    console.log('DATA LOADED SUCCESSFULLY');
    setTimeout(() => {
      localStorage.setItem('items', JSON.stringify(getState().itemStore.items))
      Swal.fire('Data Loaded successfully in local Storage')
    }, 100);
  }
  catch (error) {
    console.log(error);
  }
}