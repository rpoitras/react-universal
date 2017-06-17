import React, { Component } from 'react'
import { history } from '../../store'

const styles = {
  container: {
    flexGrow: 1
  }
}

const goBack = (e) => {
  e.preventDefault()
  return history.goBack()
}

class NotFound extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div className='column-container'>
          <h4>Page Not Found</h4>
          <p><a href='#' onClick={goBack}>&larr; Back</a></p>
        </div>
      </div>
    )
  }
}

export default NotFound
