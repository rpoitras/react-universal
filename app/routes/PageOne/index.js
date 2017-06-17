import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import { List, ListItem } from 'material-ui/List'
import {red500, blue500} from 'material-ui/styles/colors'

const styles = {
  iconStyles: {
    marginRight: '24px'
  },
  container: {
    flexGrow: 1
  }
}

class PageOne extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired
  }

  render () {
    const { route } = this.props
    return (
      <div style={styles.container} className='column-container'>
        <h2>Page With Sub-Routes</h2>
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
            containerElement={<Link to='/pageOne/A' />}
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
            containerElement={<Link to='/pageOne/B' />}
          />
        </List>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

export default PageOne
