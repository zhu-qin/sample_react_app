import React from 'react'
import Board from './board.jsx'

class MainComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Board appState={this.props.appState} actions={this.props.actions}/>
      </div>
    )
  }
}

export default MainComponent
