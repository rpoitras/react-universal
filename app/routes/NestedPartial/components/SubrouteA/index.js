import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NotFound from '../../../NotFound'

const styles = {
  container: {
    flexGrow: 1
  }
}

class SubrouteA extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render () {
    const { isExact } = this.props.match
    if (isExact) {
      return (
        <div style={styles.container}>
          <div className='column-container'>
            <h3>Page A</h3>
          </div>
        </div>
      )
    } else {
      return <NotFound />
    }
  }
}

export default SubrouteA
