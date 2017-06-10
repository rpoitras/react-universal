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
  }
}

class PageOne extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired
  }

  render () {
    const { route } = this.props
    return (
      <div className='column-container'>
        <h2>Page With Sub-Routes</h2>
        <List>
          <ListItem primaryText='' leftIcon={
            <FontIcon className='material-icons' style={styles.iconStyles} color={red500}>flight_takeoff</FontIcon>
          }>
            <Link to='/pageOne/A'>Sub-route A</Link>
          </ListItem>
          <ListItem primaryText='' leftIcon={
            <FontIcon className='material-icons' style={styles.iconStyles} color={blue500}>videogame_asset</FontIcon>
          }>
            <Link to='/pageOne/B'>Sub-route B</Link>
          </ListItem>
        </List>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

export default PageOne
