const mainReducer = {
  currentUser: function(state = {}, action) {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return Object.assign({}, action.currentUser)
        break;
      default:
        return state
    }
  }
}

export default mainReducer
