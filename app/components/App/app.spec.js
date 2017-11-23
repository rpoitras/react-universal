import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import { expect } from 'chai'
import { describe, beforeEach } from 'mocha'
import App from './app'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App match={{}} location={{}} history={{}} />
      </MuiThemeProvider>
    )
  })

  it('renders', () => {
    expect(component).to.have.lengthOf(1)
  })
})
