import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import { List, ListItem } from 'material-ui/List'
import {red500, blue500} from 'material-ui/styles/colors'
import SubrouteA from './components/SubrouteA'
import SubrouteB from './components/SubrouteB'
import NotFound from '../NotFound'

const styles = {
  iconStyles: {
    marginRight: '24px'
  },
  container: {
    flexGrow: 1
  }
}

class NestedPartial extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
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
    return (
      <div style={styles.container} className='column-container'>
        <h2>Route With Sub-Routes</h2>
        <h3>Sub-route is rendered as a Partial on the same page as the Parent</h3>
        <List>
          <ListItem
            primaryText='Sub-route A'
            leftIcon={
              <FontIcon
                className='material-icons'
                style={styles.iconStyles} color={red500}>flight_takeoff
              </FontIcon>
            }
            containerElement={<Link to={`${url}/A`} />}
          />
          <ListItem
            primaryText='Sub-route B'
            leftIcon={
              <FontIcon
                className='material-icons'
                style={styles.iconStyles}
                color={blue500}>videogame_asset
              </FontIcon>
            }
            containerElement={<Link to={`${url}/B`} />}
          />
        </List>
        {this.renderRoute(url, isExact)}
      </div>
    )
  }
}

export default NestedPartial
