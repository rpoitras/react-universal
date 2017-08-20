import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import reactLogo from 'assets/react.svg'
import dockerLogo from 'assets/dockerwhalehero.jpg'
import nginxLogo from 'assets/nginx_logo.png'
import './home.css'

const styles = {
  container: {
    flexGrow: 1
  },
  reactImg: {
    width: '300px',
    height: '300px'
  },
  dockerImg: {
    width: '195px',
    height: '195px',
    padding: '20px 42px 58px 25px'
  },
  nginxImg: {
    width: '160px',
    height: '160px',
    padding: '20px 30px 66px 0'
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
                className='react-logo'
                src={reactLogo}
                alt='React'
                style={styles.reactImg}
              />
              <img
                src={nginxLogo}
                alt='nginx'
                style={styles.nginxImg}
              />
              <img
                src={dockerLogo}
                alt='Docker'
                style={styles.dockerImg}
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
