import React from 'react'
import { shallow } from 'enzyme'
import { expect, should } from 'chai'
import { describe, beforeEach } from 'mocha'
import Home from './'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

describe('<Home />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Home />
      </MuiThemeProvider>
    )
  })

  it('renders', () => {
    expect(component).to.have.lengthOf(1)
  })

  it('has links to other routes', () => {
    should(component.find('Link')).not.equal(0)
  })
})
