export default function mapDispatchToActions(dispatch) {
  return {
    
    setCurrentUser: function(currentUser) {
      dispatch({
        type: 'SET_CURRENT_USER',
        currentUser: currentUser
      })
    }

  }
}
