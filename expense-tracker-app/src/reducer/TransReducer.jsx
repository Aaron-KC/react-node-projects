const TransReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TRANSACTION':
      return {
        transactions: [...state.transactions, action.payload]
      }
    case 'DELETE_TRANSACTION':
      return {
        transactions: state.transactions.filter(trans => trans.id !== action.payload)
      }
    default:
      return state;
  }
}
export default TransReducer