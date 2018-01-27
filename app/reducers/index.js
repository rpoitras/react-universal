import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import UsersReducer, { getInitialUserState } from '../routes/User/reducers/user.reducer'

const rootReducer = combineReducers({
  users: UsersReducer,
  routing: routerReducer
})

export const getDefaultInitialState = () => {
  const initialState = {}
  initialState.users = getInitialUserState()

  return initialState
}

export default rootReducer
