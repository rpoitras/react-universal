import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { describe, beforeEach } from 'mocha'
import PageOne from './'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

describe('<PageOne />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <PageOne route={{}} />
      </MuiThemeProvider>
    )
  })

  it('renders', () => {
    expect(component).to.have.length.of(1)
  })
})
