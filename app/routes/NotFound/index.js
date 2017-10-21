import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { history } from '../../store'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import typographyStyle from 'styles/typography-style'
import KeyboardBackspaceIcon from 'material-ui-icons/KeyboardBackspace'

const styles = theme => ({
  container: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  }
})

const goBack = (e) => {
  e.preventDefault()
  return history.goBack()
}

class NotFound extends Component {
  render () {
    const { classes } = this.props
    return (
      <div style={[styles.container, typographyStyle]} className='column-container'>
        <br />
        <Typography type='title' gutterBottom align='center'>
          Page Not Found
        </Typography>
        <Button
          fab
          color='accent'
          aria-label='Back'
          className={classes.button}
          component='a'
          onTouchTap={goBack}
        >
          <KeyboardBackspaceIcon />
        </Button>
      </div>
    )
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NotFound)
