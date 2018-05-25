const suggestion = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SUGGESTION':
      return action.payload
    default:
      return state
  }
}

export default suggestion
