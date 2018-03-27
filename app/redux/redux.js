function createStore(mainReducer, preloadedState = {}, storeEnhancer) {

  if (storeEnhancer) {
    return storeEnhancer(createStore)(mainReducer, preloadedState)
  }

  let currentState = preloadedState
  let listeners = []
  let currentReducer = mainReducer
  let isDispatching = false

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    listeners.push(listener)
    return function unsubscribe() {
      let idx = listeners.indexOf(listener)
      listeners.splice(idx, 1)
    }
  }

  function dispatch(action) {
   try {
     isDispatching = true
     currentState = currentReducer(currentState, action)
   } finally {
     isDispatching = false
   }

   listeners.forEach((listener) => listener())
  }

  return {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState
  }
}


function combineReducers(reducers) {

  return function mainReducer(state, action) {
    let hasChanged = false
    const nextState = {}
    Object.keys(reducers).forEach((key) => {
      const previousStateSlice = state[key]
      const nextStateSlice = reducers[key](previousStateSlice, action)
      nextState[key] = nextStateSlice
      hasChanged = hasChanged || nextStateSlice !== previousStateSlice
    })
    return hasChanged ? nextState : state
  }

}

function compose() {
  let fns = arguments
  let start = arguments.length - 1
  return function pipe() {
    let i = start
    let finalResult = fns[start].apply(this, arguments)
    while (i--) {
      finalResult = fns[i].call(this, finalResult)
    }
    return finalResult
  }
}

function applyMiddleware(...middlewares) {

  return (createStore) => (...args) => {
    let store = createStore(...args)
    let chain = []

    let dispatch = () => console.log('Replace this dispatch');

    let middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }

    chain = middlewares.map((middleware) => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return Object.assign({}, store, { dispatch: dispatch })
  }

}


const Redux = {
  createStore: createStore,
  combineReducers: combineReducers,
  compose: compose,
  applyMiddleware: applyMiddleware
}


export default Redux
