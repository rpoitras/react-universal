import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import typographyStyle from 'styles/typography-style'
import Button from 'material-ui/Button'
import Snackbar from 'material-ui/Snackbar'
import TextField from 'material-ui/TextField'
import { WS_DEST, WS_PORT } from 'util/constants'

const styles = theme => ({
  container: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

class WebSocketExample extends Component {
  constructor () {
    super()
    this.state = {
      snackbarOpen: false,
      inputDisabled: true,
      connectDisabled: false,
      disconnectDisabled: true,
      sendDisabled: true
    }
    this.snackbarMsg = ''
    this.ws = null
    this.refreshTime = Date.now()

    // HMR and fat arrow functions does not work. Alternative is to avoid them, but you have to bind this as needed.
    // https://github.com/gaearon/react-hot-loader/issues/221
    this.wsOpenCallback = this.wsOpenCallback.bind(this)
    this.wsConnect = this.wsConnect.bind(this)
    this.wsDisconnect = this.wsDisconnect.bind(this)
    this.wsMessageCallback = this.wsMessageCallback.bind(this)
    this.wsSendMessage = this.wsSendMessage.bind(this)
    this.handleInputTextChange = this.handleInputTextChange.bind(this)
    this.handleTextKeyPress = this.handleTextKeyPress.bind(this)
    this.handleSnackbarRequestClose = this.handleSnackbarRequestClose.bind(this)
  }

  wsOpenCallback (event) {
    console.log('WebSocket opened.', event)
    this.snackbarMsg = 'WebSocket is open.'
    this.setState({
      snackbarOpen: true,
      inputDisabled: false,
      connectDisabled: true,
      disconnectDisabled: false,
      sendDisabled: false,
      inputValue: ''
    })
  }

  wsConnect () {
    if (this.ws === null) {
      // this.ws = new WebSocket(`wss://localhost:${WS_PORT}/${WS_DEST}`)
      this.ws = new WebSocket(`ws://localhost:${WS_PORT}/${WS_DEST}`)
      console.log('this.ws', this.ws)
      this.ws.addEventListener('open', this.wsOpenCallback)
      this.ws.addEventListener('message', this.wsMessageCallback)
    } else {
      this.snackbarMsg = 'WebSocket is already connected'
      this.setState({ snackbarOpen: true })
    }
  }

  wsDisconnect () {
    this.ws.close()
    this.ws = null
    this.snackbarMsg = 'WebSocket Closed'
    this.setState({
      snackbarOpen: true,
      inputDisabled: true,
      connectDisabled: false,
      disconnectDisabled: true,
      sendDisabled: true
    })
  }

  wsMessageCallback (event) {
    console.log('Message from server: ', event.data)
    this.snackbarMsg = event.data
    this.setState({ snackbarOpen: true })
  }

  wsSendMessage () {
    if (this.ws) {
      this.ws.send(this.state.inputValue)
    } else {
      this.snackbarMsg = 'WebSocket is not connected'
      this.setState({ snackbarOpen: true })
    }
  }

  handleInputTextChange (event) {
    this.setState({ inputValue: event.target.value })
  }

  handleTextKeyPress (event) {
    if (event.charCode === 13) { // enter key pressed
      event.preventDefault()
      this.wsSendMessage()
    }
  }

  handleSnackbarRequestClose () {
    this.setState({
      snackbarOpen: false
    })
  }

  componentWillUnmount () {
    if (this.ws) {
      this.ws.close()
      this.ws = null
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    let oldTime = this.refreshTime
    this.refreshTime = Date.now()
    let diff = this.refreshTime - oldTime
    console.log(`Last refresh was ${diff} milliseconds ago`)
    return true
  }

  render () {
    const { classes } = this.props
    return (
      <div style={typographyStyle} className='column-container'>
        <Typography type='title' gutterBottom align='center'>
          WebSocket - Echo
        </Typography>
        <br />
        <br />
        <div className='row-container'>
          <Button raised
            className={classes.button}
            id='ws_connect'
            disabled={this.state.connectDisabled}
            onTouchTap={this.wsConnect}>Connect
          </Button>
          <Button raised
            className={classes.button}
            id='ws_disconnect'
            disabled={this.state.disconnectDisabled}
            onMouseDown={this.wsDisconnect}>Disconnect
          </Button>
          <Button raised
            className={classes.button}
            id='ws_send'
            disabled={this.state.sendDisabled}
            onMouseDown={this.wsSendMessage}>Send
          </Button>
        </div>
        <br />
        <TextField
          className={classes.textField}
          id='ws_input_field'
          disabled={this.state.inputDisabled}
          onChange={this.handleInputTextChange}
          onKeyPress={this.handleTextKeyPress}
          label='Send to Server'
          margin='normal'
        />
        <Snackbar
          open={this.state.snackbarOpen}
          message={this.snackbarMsg}
          autoHideDuration={3000}
          onRequestClose={this.handleSnackbarRequestClose}
        />
      </div>
    )
  }
}

WebSocketExample.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(WebSocketExample)
