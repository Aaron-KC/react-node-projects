import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      let itemExists = state.cartItems.find(item => item.id == action.payload.id)

      if (itemExists) {
        return {
          cartItems: state.cartItems.map(cartItem => {
            return cartItem.id == itemExists.id ? { ...itemExists, quantity: itemExists.quantity + action.payload.quantity } : cartItem
          })
        }
      } else {
        return {
          cartItems: [...state.cartItems, { ...action.payload }]
        }
      }
    }, 
    DELETE_CART_ITEM: (state, action) => {
      return {
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload)
      }
    },
    RESET_CART: () => {
      return {
        cartItems: []
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { ADD_TO_CART, DELETE_CART_ITEM, RESET_CART } = cartSlice.actions

export default cartSlice.reducer