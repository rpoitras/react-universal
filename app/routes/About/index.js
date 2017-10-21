import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import StarIcon from 'material-ui-icons/Star'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center'
  }
})

const typographyStyle = {
  width: '100%',
  // maxWidth: 500,
  marginTop: '100px',
  align: 'center'
}

class About extends Component {
  render () {
    const { classes } = this.props
    return (
      <div style={typographyStyle} className='column-container'>
        <Typography type='title' gutterBottom align='center'>
          About
        </Typography>
        <Typography type='subheading' gutterBottom align='center'>
          Some Links
        </Typography>
        <br />
        <List className={classes.root}>
          <Divider />
          <ListItem button component='a' href='https://facebook.github.io/react'>
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText inset primary='React' />
          </ListItem>
          <Divider />
          <ListItem button component='a' href='http://redux.js.org/'>
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText inset primary='Redux' />
          </ListItem>
          <Divider />
          <ListItem button component='a' href='http://www.material-ui.com/#/'>
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText inset primary='Material UI' />
          </ListItem>
          <Divider />
          <ListItem button component='a' href='statistics.html'>
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText inset primary='Application Statistics' />
          </ListItem>
          <Divider />
        </List>
      </div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)
