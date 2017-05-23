import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '../../routes/routes'

/*
 * The application top level route.
 */
class Root extends Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter basename='/react-universal' history={this.props.history}>
          <div>
            {renderRoutes(routes)}
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
