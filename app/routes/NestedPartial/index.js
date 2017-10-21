import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import FlightTakeoffIcon from 'material-ui-icons/FlightTakeoff'
import VideogameAssetIcon from 'material-ui-icons/VideogameAsset'
import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import typographyStyle from 'styles/typography-style'
import blue from 'material-ui/colors/blue'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'
import SubrouteA from './components/SubrouteA'
import SubrouteB from './components/SubrouteB'
import NotFound from '../NotFound'

const styles = theme => ({
  iconStyles: {
    marginRight: '24px'
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center'
  },
  icon: {
    margin: theme.spacing.unit
  },
  iconBlue: {
    fill: blue[500]
  },
  iconRed: {
    fill: red[500]
  },
  iconHover: {
    fill: red[500],
    '&:hover': {
      fill: green[200]
    }
  }
})

class NestedPartial extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  }

  renderRoute (url, isExact) {
    // if exact we are on NestedPartial, otherwise try to render one of the sub-routes
    if (!isExact) {
      return (
        <Switch>
          <Route path={`${url}/A`} component={SubrouteA} />
          <Route path={`${url}/B`} component={SubrouteB} />
          <Route component={NotFound} />
        </Switch>
      )
    }
  }

  render () {
    const { url, isExact } = this.props.match
    const { classes } = this.props
    return (
      <div className={[classes.container, 'column-container']}>
        <div style={typographyStyle} className='column-container'>
          <Typography type='title' gutterBottom align='center'>
          Route With Sub-Routes
          </Typography>
          <Typography type='subheading' gutterBottom align='center'>
          Sub-route is rendered as a Partial on the same page as the Parent
          </Typography>
          <br />
          <List>
            <Divider />
            <ListItem component={Link} to={`${url}/A`}>
              <ListItemIcon className={classNames(classes.icon, classes.iconBlue)}>
                <FlightTakeoffIcon />
              </ListItemIcon>
              <ListItemText primary='Sub-route A' />
            </ListItem>
            <Divider />
            <ListItem component={Link} to={`${url}/B`}>
              <ListItemIcon className={classNames(classes.icon, classes.iconRed)}>
                <VideogameAssetIcon />
              </ListItemIcon>
              <ListItemText primary='Sub-route B' />
            </ListItem>
            <Divider />
          </List>
          {this.renderRoute(url, isExact)}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(NestedPartial)
