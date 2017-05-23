import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  routing: routerReducer
})

export const getDefaultInitialState = () => {
  const initialState = {}
  // add to initial states as routes are added

  return initialState
}

export default rootReducer
