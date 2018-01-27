import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import defaultLogo from 'assets/cool-icon.png'

import Routes from '../../routes/routes'

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      appLogo: defaultLogo
    }
    this.styles = {
      layout: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      routesContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
      },
      forceNavDown: {
        top: '64px'
      },
      imgDiv: {
        height: '60px',
        width: 'auto',
        marginTop: '2px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center'
      }
    }
  }

  handleRequestChange = () => {
    this.setState({ open: false })
  }

  handleHamburgerToggle = () => {
    this.setState({ open: !this.state.open })
  }

  getLogoStyle = () => {
    let imgStyling = {
      ...this.styles.imgDiv,
      backgroundImage: `url(${this.state.appLogo})`,
      backgroundSize: 'contain'
    }
    return imgStyling
  }

  render () {
    // match, location and history are unused, provided by withRouter
    // Just wanted to have them here as an example/reminder
    const { match, location, history } = this.props
    console.log('App => match', match)
    console.log('App => location', location)
    console.log('App => history', history)

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={this.styles.layout}>
          <AppBar
            id='app-bar'
            title={<div style={this.getLogoStyle()} />}
            onLeftIconButtonClick={this.handleHamburgerToggle}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon id='app-moreButton' /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem primaryText='Sign Out' />
              </IconMenu>
            }
          />
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={this.handleRequestChange}
            containerStyle={this.styles.forceNavDown}
          >
            <Menu>
              <MenuItem
                onTouchTap={this.handleRequestChange}
                containerElement={<Link to='/nestedPartial' />}>Nested Partial</MenuItem>
              <MenuItem
                onTouchTap={this.handleRequestChange}
                containerElement={<Link to='/websocket' />}>WebSocket</MenuItem>
              <MenuItem
                onTouchTap={this.handleRequestChange}
                containerElement={<Link to='/user' />}>User</MenuItem>
              <Divider />
              <MenuItem
                onTouchTap={this.handleRequestChange}
                containerElement={<Link to='/' />}>Home</MenuItem>
              <MenuItem
                onTouchTap={this.handleRequestChange}
                containerElement={<Link to='/about' />}>About</MenuItem>
            </Menu>
          </Drawer>
          <div style={this.styles.routesContainer}>
            <Routes />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
