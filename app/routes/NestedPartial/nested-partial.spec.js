import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { describe, beforeEach } from 'mocha'
import NestedPartial from './'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

describe('<NestedPartial />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <MuiThemeProvider>
        <NestedPartial match={{}} />
      </MuiThemeProvider>
    )
  })

  it('renders', () => {
    expect(component).to.have.lengthOf(1)
  })
})
