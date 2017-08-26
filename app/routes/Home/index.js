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
    height: '300px',
    padding: '0 0 0 0'
  },
  dockerImg: {
    width: '195px',
    height: '195px',
    padding: '20px 30px 58px 0'
  },
  nginxImg: {
    width: '160px',
    height: '160px',
    padding: '20px 10px 66px 50px'
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
              <a href='https://www.nginx.com/resources/wiki/' target='_blank'>
                <img
                  src={nginxLogo}
                  alt='nginx'
                  style={styles.nginxImg}
                />
              </a>
              <a href='https://facebook.github.io/react/' target='_blank'>
                <img
                  className='react-logo'
                  src={reactLogo}
                  alt='React'
                  style={styles.reactImg}
                />
              </a>
              <a href='https://www.docker.com/community-edition' target='_blank'>
                <img
                  src={dockerLogo}
                  alt='Docker'
                  style={styles.dockerImg}
                />
              </a>
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
