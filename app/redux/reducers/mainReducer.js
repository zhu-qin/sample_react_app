const mainReducer = {
  currentUser: function(state = {}, action) {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return Object.assign({}, action.currentUser)
        break;
      default:
        return state
    }
  },

  board: function(state = [], action) {
    switch (action.type) {
      case 'SET_BOARD':
          return action.board
        break;
      case 'ADD_CARD':
          action.column.cards = action.column.cards.concat(action.card)
          let colIdx = state.indexOf(action.column)
          state.splice(colIdx, 1, action.column)
          return Object.assign([], state)
        break;
      case 'REMOVE_CARD':
          let cardIdx = action.column.cards.indexOf(action.card)
          action.column.cards.splice(cardIdx, 1)
          colIdx = state.indexOf(action.column)
          state.splice(colIdx, 1, action.column)
          return Object.assign([], state)
        break;
      default:
          return state
    }
  }
}

export default mainReducer
