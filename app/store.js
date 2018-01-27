import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import rootReducer, { getDefaultInitialState } from './reducers'
import Async from './middlewares/async'

// Initial Redux Store state is pulled from each reducer's initial state definition.
const initialState = getDefaultInitialState()

// Set up the router history off the base application name.
export const history = createBrowserHistory({ basename: '/react-universal' })
const historyRouterMiddleware = routerMiddleware(history)

// Build up the store
const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(Async, historyRouterMiddleware)
))

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers/index').default
    store.replaceReducer(nextReducer)
  })
}

export default store
