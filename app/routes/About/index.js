import React, { Component } from 'react'

const styles = {
  container: {
    flexGrow: 1
  }
}

class About extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div className='column-container'>
          <h2>About</h2>
          <p>Some Links</p>
          <ul>
            <li>
              <a href='https://facebook.github.io/react'>React</a>
            </li>
            <li>
              <a href='http://redux.js.org/'>Redux</a>
            </li>
            <li>
              <a href='http://www.material-ui.com/#/'>Material UI</a>
            </li>
            <li>
              <a href='statistics.html'>Application Statistics</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default About
