import React from 'react'
import ReactDOM from 'react-dom'
import Redux from './redux/redux.js'
import mainReducer from './redux/reducers/mainReducer.js'
import mapDispatchToActions from './redux/actions/mapDispatchToActions.js'
import MainComponent from './components/mainComponent.jsx'

class Entry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const store = this.props.store
    this.unsubscribe = store.subscribe(() => this.setState({ appState: store.getState() }))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    if (!this.state.appState) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <MainComponent appState={this.state.appState} actions={this.props.actions}/>
      </div>
    )
  }
}

const store = Redux.createStore(Redux.combineReducers(mainReducer), {})
const actions = mapDispatchToActions(store.dispatch)

document.addEventListener('DOMContentLoaded', (e) => {
  ReactDOM.render(<Entry store={store} actions={actions}/>, document.getElementById('root'))
})

setTimeout(() => actions.setCurrentUser({
  firstName: 'Billy',
  lastName: 'Bob'
}), 1000)

const board = [
  {
    id: 1,
    cards: [{text: 'hello1'},{text: 'world1'}]
  },
  {
    id:2,
    cards: [{text: 'hello2'},{text: 'world2'}]
  },
  {
    id:3,
    cards: [{text: 'hello3'},{text: 'world3'}]
  },
  {
    id:4,
    cards: [{text: 'hello4'},{text: 'world4'}]
  }
]

setTimeout(() => actions.setBoard(board), 200)
