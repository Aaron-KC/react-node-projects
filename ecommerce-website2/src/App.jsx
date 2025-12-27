import React from 'react'
import MyRoutes from './MyRoutes'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { itemReducer } from './redux/itemReducer'
import { cartReducer } from './redux/cartReducer'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk';

function App() {
  const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: cartReducer
  });
  const initialData = {
    cartStore: {
      cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
    }
  }
  const store = createStore(rootReducer, initialData, applyMiddleware(thunk))
  
  return (
    <>
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    </>
  )
}

export default App

