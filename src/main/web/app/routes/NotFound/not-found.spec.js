import React from 'react'
import { shallow } from 'enzyme'
import { expect, should } from 'chai'
import { describe, beforeEach } from 'mocha'
import NotFound from './'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

describe('<NotFound />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <NotFound />
      </MuiThemeProvider>
    )
  })

  it('renders', () => {
    expect(component).to.have.length.of(1)
  })
})
