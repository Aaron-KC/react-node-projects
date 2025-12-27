const initialData = {
  active: localStorage.getItem('active') || ''
}

export const activeReducer = (state=initialData, action) => {
  switch(action.type) {
    case 'home':
      localStorage.setItem('active', action.type)
      return {active: 'home'}
    case 'recipe':
      localStorage.setItem('active', action.type)
      return {active: 'recipe'}
    default:
      return state
  }
}