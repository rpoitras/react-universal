import { userActionTypes } from '../actions/user.actions'
import { List } from 'immutable'

const initialState = List()

export default function fetchUsers (state = initialState, action) {
  switch (action.type) {
    case userActionTypes.FETCH_USERS:
      return List.of(...action.payload)
  }
  return state
}

export function getInitialUserState () {
  return initialState
}
