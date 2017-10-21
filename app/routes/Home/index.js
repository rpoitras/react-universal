import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import reactLogo from 'assets/react.svg'
import dockerLogo from 'assets/dockerwhalehero.jpg'
import nginxLogo from 'assets/nginx_logo.png'
import './home.css'

const styles = theme => ({
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
    padding: '20px 10px 66px 0'
  },
  input: {
    display: 'none'
  }
})

class Home extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classNames(classes.container, 'column-container')}>
        <h1>React Universal App</h1>
        <div>
          <span>
            <a href='https://www.nginx.com/resources/wiki/' target='_blank'>
              <img
                src={nginxLogo}
                alt='nginx'
                className={classes.nginxImg}
              />
            </a>
            <a href='https://facebook.github.io/react/' target='_blank'>
              <img
                src={reactLogo}
                alt='React'
                className={classes.reactImg}
              />
            </a>
            <a href='https://www.docker.com/community-edition' target='_blank'>
              <img
                src={dockerLogo}
                alt='Docker'
                className={classes.dockerImg}
              />
            </a>
          </span>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
