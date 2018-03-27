import React from 'react'
import Card from './card.jsx'

class Column extends React.Component {
  constructor(props) {
    super(props)
  }

  addCard(column, e) {
    let message = window.prompt()
    this.props.actions.addCard({text: message}, column)
  }

  render() {
      let cards = this.props.column.cards.map((card) => {
        return <Card appState={this.props.appState}
                     actions={this.props.actions}
                     column={this.props.column}
                     card={card}
                     key={card.text}/>
      })


    return (
      <div style={{border: '1px solid black', padding: '30px', marginLeft: '10px'}}>
        {cards}
        <div onClick={this.addCard.bind(this, this.props.column)}>Add Card</div>
      </div>
    )
  }
}

export default Column
