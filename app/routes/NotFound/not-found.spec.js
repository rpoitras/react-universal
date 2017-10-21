import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { describe, beforeEach } from 'mocha'
import NotFound from './'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

describe('<NotFound />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <MuiThemeProvider>
        <NotFound />
      </MuiThemeProvider>
    )
  })

  it('renders', () => {
    expect(component).to.have.lengthOf(1)
  })
})
