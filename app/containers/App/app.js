import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import JssProvider from 'react-jss/lib/JssProvider'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import CloudIcon from 'material-ui-icons/CloudCircle'
import HomeIcon from 'material-ui-icons/Home'
import InfoIcon from 'material-ui-icons/InfoOutline'
import PicInPicIcon from 'material-ui-icons/PictureInPictureAlt'
import blue from 'material-ui/colors/blue'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'
import orange from 'material-ui/colors/orange'
import classNames from 'classnames'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import MenuIcon from 'material-ui-icons/Menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import defaultLogo from 'assets/cool-icon.png'
import createContext from '../../styles/create-context'
import Routes from '../../routes/routes'

const context = createContext()
const drawerWidth = 240

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    width: '100%',
    marginLeft: -drawerWidth,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64
      }
    }
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  icon: {
    margin: theme.spacing.unit
  },
  iconBlue: {
    fill: blue[500]
  },
  iconRed: {
    fill: red[500]
  },
  iconGreen: {
    fill: green[500]
  },
  iconOrange: {
    fill: orange[500]
  }
})

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      anchorEl: null,
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

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
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
    const { match, location, history, classes, theme } = this.props
    console.log('App => match', match)
    console.log('App => location', location)
    console.log('App => history', history)

    return (
      <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
        <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
          <div className={classes.root} style={this.styles.layout}>
            <div className={classes.appFrame}>
              <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                <Toolbar disableGutters={!this.state.open}>
                  <IconButton
                    className={classNames(classes.menuButton, this.state.open && classes.hide)}
                    color='contrast'
                    aria-label='Menu'
                    onClick={this.handleDrawerOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography type='title' color='inherit' noWrap>
                    React Universal
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                type='persistent'
                classes={{paper: classes.drawerPaper}}
                open={this.state.open}
              >
                <div className={classes.drawerInner}>
                  <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                  </div>
                  <Divider />
                  <div>
                    <List>
                      <ListItem button onTouchTap={this.handleRequestChange} component={Link} to='/nestedPartial'>
                        <ListItemIcon className={classNames(classes.icon, classes.iconBlue)}>
                          <PicInPicIcon />
                        </ListItemIcon>
                        <ListItemText primary='Nested Partial' />
                      </ListItem>
                      <ListItem button onTouchTap={this.handleRequestChange} component={Link} to='/websocket'>
                        <ListItemIcon className={classNames(classes.icon, classes.iconGreen)}>
                          <CloudIcon />
                        </ListItemIcon>
                        <ListItemText primary='WebSocket' />
                      </ListItem>
                      <ListItem button onTouchTap={this.handleRequestChange} component={Link} to='/'>
                        <ListItemIcon className={classNames(classes.icon, classes.iconOrange)}>
                          <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                      </ListItem>
                      <ListItem button onTouchTap={this.handleRequestChange} component={Link} to='/about'>
                        <ListItemIcon className={classNames(classes.icon, classes.iconRed)}><InfoIcon /></ListItemIcon>
                        <ListItemText primary='About' />
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Drawer>
              <div style={this.styles.routesContainer}>
                <Routes />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </JssProvider>
    )
  }
}

export default withStyles(styles, { withTheme: true })(App)
