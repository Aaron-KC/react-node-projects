import MyRoutes from './MyRoutes'
import './index.css'
import './App.css'
import { combineReducers, createStore } from 'redux'
import { activeReducer } from './Reducer/activeReducer'
import { Provider } from 'react-redux'

function App() {
  const rootReducer = combineReducers({
    activeStore: activeReducer
  })

  const store = createStore(rootReducer)
  return (
    <>
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    </>
  )
}

export default App
