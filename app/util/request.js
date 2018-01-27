import 'whatwg-fetch'

export default function request (url, method = 'GET', body) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const options = {
    method: method,
    headers: headers,
    body: JSON.stringify(body)
  }
  return fetch(url, options)
    .then((response) => {
      return response.json()
    }).then((result) => {
      return result
    }).catch((error) => {
      console.error('parse JSON error: ', error)
      throw error
    })
    .then((result) => {
      return result
    })
    .catch((error) => {
      console.error('request error: ', error)
      throw error
    })
}
