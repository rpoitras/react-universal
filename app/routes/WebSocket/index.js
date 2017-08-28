import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import TextField from 'material-ui/TextField'
import { orange500, blue500, red500, yellow500 } from 'material-ui/styles/colors'

const styles = {
  wsButton: {
    margin: '10px'
  },
  wsInputField: {
    floatingLabelText: {
      color: yellow500
    },
    floatingLabelStyle: {
      color: orange500
    },
    floatingLabelFocusStyle: {
      color: blue500
    },
    underlineStyle: {
      borderColor: red500
    }
  }
}

/**
 * TODO - split into presentation and container
 */
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
      this.ws = new WebSocket('ws://192.168.0.129:8020')
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

  render () {
    return (
      <div className='column-container'>
        <h2 id='ws_main_heading'>WebSocket Example</h2>
        <br />
        <br />
        <div className='row-container'>
          <RaisedButton
            style={styles.wsButton}
            id='ws_connect'
            disabled={this.state.connectDisabled}
            label='Connect'
            onMouseDown={this.wsConnect}
          />
          <RaisedButton
            style={styles.wsButton}
            id='ws_disconnect'
            disabled={this.state.disconnectDisabled}
            label='Disconnect'
            onMouseDown={this.wsDisconnect}
          />
          <RaisedButton
            style={styles.wsButton}
            id='ws_send'
            disabled={this.state.sendDisabled}
            label='Send'
            onMouseDown={this.wsSendMessage}
          />
        </div>
        <br />
        <TextField
          style={styles.wsInputField}
          id='ws_input_field'
          disabled={this.state.inputDisabled}
          onChange={this.handleInputTextChange}
          onKeyPress={this.handleTextKeyPress}
          hintText='enter text'
          floatingLabelText='Send to Server'
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

export default WebSocketExample
