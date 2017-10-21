import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import typographyStyle from 'styles/typography-style'
import NotFound from '../../../NotFound'

const styles = {
  container: {
    flexGrow: 1
  }
}

class SubrouteB extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render () {
    const { isExact } = this.props.match
    if (isExact) {
      return (
        <div style={[styles.container, typographyStyle]} className='column-container'>
          <br />
          <Typography type='title' gutterBottom align='center'>
            Page B
          </Typography>
        </div>
      )
    } else {
      return <NotFound />
    }
  }
}

export default SubrouteB
