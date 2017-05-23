import 'babel-polyfill'

import ReactDOM from 'react-dom'
import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppContainer } from 'react-hot-loader'

import { store, history } from './store'
import Root from './containers/Root'

import '../style/common.css'

// Needed for onTouchTap, see http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

function renderApp (RootComponent) {
  ReactDOM.render(
    <AppContainer>
      <RootComponent store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
}

renderApp(Root)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextApp = require('./containers/Root').default
    renderApp(NextApp)
  })
}
