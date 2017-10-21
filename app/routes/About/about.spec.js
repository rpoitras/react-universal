import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { describe, beforeEach } from 'mocha'
import About from './'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

describe('<About />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <MuiThemeProvider>
        <About />
      </MuiThemeProvider>
    )
  })

  it('renders', () => {
    expect(component).to.have.lengthOf(1)
  })
})
