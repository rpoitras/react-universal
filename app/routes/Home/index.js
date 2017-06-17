import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import reactLogo from 'assets/react.png'

const styles = {
  container: {
    flexGrow: 1
  },
  reactImg: {
    width: '200px',
    height: '200px'
  }
}

class Home extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div className='column-container'>
          <h1>React Universal App</h1>
          <div>
            <span>
              <img
                src={reactLogo}
                alt='React'
                style={styles.reactImg}
              />
            </span>
          </div>
          <br />
          <div className='row-container'>
            <Link to='/about'>
              <RaisedButton
                id='home-aboutButton'
                label='About' />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
