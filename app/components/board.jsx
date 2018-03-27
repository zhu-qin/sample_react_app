import React from 'react'
import Column from './column.jsx'

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let columns = this.props.appState.board.map((column) => {
      return <Column key={column.id} appState={this.props.appState} actions={this.props.actions} column={column}/>
    })
    return (
      <div style={{display: 'flex'}}>
        {columns}
      </div>
    )
  }
}

export default Board
