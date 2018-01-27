import request from 'util/request'
const FETCH_USERS = 'FETCH_USERS'

function fetchUsers () {
  const response = request('http://127.0.0.1:3000/api/react_universal_collection?apiKey=ifna212ASFisfsjaAFFF')
  return {
    type: FETCH_USERS,
    payload: response
  }
}

const userActionTypes = {
  FETCH_USERS
}

export {
  userActionTypes,
  fetchUsers
}
