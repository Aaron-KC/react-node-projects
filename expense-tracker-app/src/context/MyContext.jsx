import { createContext, useReducer } from "react";
import TransReducer from "../reducer/TransReducer";

const initialState = {
  transactions: []
}
export const MyContext = createContext();

export const MyContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(TransReducer, initialState)
  return(
    <MyContext.Provider value={{
      transactions: state.transactions,
      dispatch: dispatch
    }}>
      {children}
    </MyContext.Provider>
  )
}