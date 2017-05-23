import React, { Component } from 'react'
import PropTypes from 'prop-types'

class About extends Component {
  render () {
    return (
      <div className='column-container'>
        <h2>About</h2>
        <p>Some Links</p>
        <ul>
          <li>
            <a href='https://facebook.github.io/react'>React</a>
          </li>
          <li>
            <a href='http://spring.io/'>Spring</a>
          </li>
          <li>
            <a href='http://redux.js.org/'>Redux</a>
          </li>
          <li>
            <a href='http://www.material-ui.com/#/'>Material UI</a>
          </li>
        </ul>
      </div>
    )
  }
}

About.propTypes = {
  muiTheme: PropTypes.object
}

export default About
