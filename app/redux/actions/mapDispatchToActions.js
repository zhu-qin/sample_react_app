export default function mapDispatchToActions(dispatch) {
  return {

    setCurrentUser: function(currentUser) {
      dispatch({
        type: 'SET_CURRENT_USER',
        currentUser: currentUser
      })
    },

    setBoard: function(board) {
      dispatch({
        type: 'SET_BOARD',
        board: board
      })
    },

    addCard: function(card, column) {
      dispatch({
        type: 'ADD_CARD',
        column: column,
        card: card
      })
    },

    removeCard: function(card, column) {
      dispatch({
        type: 'REMOVE_CARD',
        column: column,
        card: card
      })
    }

  }
}
