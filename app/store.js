import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import rootReducer, { getDefaultInitialState } from './reducers'

// Initial Redux Store state is pulled from each reducer's initial state definition.
const initialState = getDefaultInitialState()

// Set up the router history off the base application name.
export const history = createBrowserHistory({ basename: `/${process.env.APP_BASE_NAME}` })
const historyRouterMiddleware = routerMiddleware(history)

// Build up the store
let composeEnhancers = null
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
} else {
  composeEnhancers = compose
}
export const store = createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(historyRouterMiddleware)
))
