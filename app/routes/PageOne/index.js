import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import { List, ListItem } from 'material-ui/List'
import {red500, blue500} from 'material-ui/styles/colors'
import PageOneA from './components/PageOneA'
import PageOneB from './components/PageOneB'

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
    match: PropTypes.object.isRequired
  }

  render () {
    const { url } = this.props.match
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
          <Route path={`${url}/A`} component={PageOneA} />
          <Route path={`${url}/B`} component={PageOneB} />
        </List>
      </div>
    )
  }
}

export default PageOne
