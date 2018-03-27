import React from 'react'

class MainComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        firstName: {this.props.appState.currentUser.firstName}
      </div>
    )
  }
}

export default MainComponent
