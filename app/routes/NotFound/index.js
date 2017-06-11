import React, { Component } from 'react'
import { history } from '../../store'

const goBack = (e) => {
  e.preventDefault()
  return history.goBack()
}

class NotFound extends Component {
  render () {
    return (
      <div className='column-container'>
        <h4>Page Not Found</h4>
        <p><a href='#' onClick={goBack}>&larr; Back</a></p>
      </div>
    )
  }
}

export default NotFound
