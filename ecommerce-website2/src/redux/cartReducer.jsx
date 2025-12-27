const initialData = {
  cartItems: []
}

export const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { cartItems: [...state.cartItems, action.payload] }
    case 'UPDATE_CART':
      return {
        cartItems: state.cartItems.map((cartItem) => {
          return cartItem.title == action.payload.title ? action.payload : cartItem;
        })
      }
    case 'REMOVE_FROM_CART':
      return {
        cartItems: state.cartItems.filter((cartItem) => {
          return !(cartItem.title == action.payload.title)  
        })
      }

    default:
      return state;
  }
}