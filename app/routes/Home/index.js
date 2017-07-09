import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import reactLogo from 'assets/react.png'
import dockerLogo from 'assets/dockerwhalehero.jpg'
import nginxLogo from 'assets/nginx_logo.png'

const styles = {
  container: {
    flexGrow: 1
  },
  reactImg: {
    width: '200px',
    height: '200px',
    padding: '20px 40px 10px 40px'
  },
  dockerImg: {
    width: '195px',
    height: '195px',
    padding: '20px 42px 24px 25px'
  },
  nginxImg: {
    width: '160px',
    height: '160px',
    padding: '20px 25px 30px 5px'
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
