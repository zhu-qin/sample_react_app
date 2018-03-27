import React from 'react'

const moveCardStyle = {
  padding: '10px',
  border: '1px solid black',
  borderRadius: '3px',
  margin: '10px',
  cursor: 'pointer'
}

const hidden = {
  display: 'none'
}

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  moveCard(direction, e) {
    this.props.actions.removeCard(this.props.card, this.props.column)
    let columnToAdd = this.props.appState.board.find((column) => {
      let moveIdx = direction === 'left' ? -1 : 1
      return column.id === this.props.column.id + moveIdx
    })
    this.props.actions.addCard(this.props.card, columnToAdd)
  }

  render() {
    return (
      <div style={{border: '1px solid black', padding: '30px', margin: '5px', display:'flex'}}>
        <div style={this.props.column.id === 1 ? hidden : moveCardStyle} onClick={this.moveCard.bind(this, 'left')}>
          {"<=="}
        </div>
        {this.props.card.text}
        <div style={this.props.column.id === this.props.appState.board.length ? hidden : moveCardStyle} onClick={this.moveCard.bind(this, 'right')}>
          {"==>"}
        </div>
      </div>
    )
  }
}

export default Card
