import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddSvgIcon from 'material-ui/svg-icons/content/add-circle-outline'
import { red500, redA100, green500, greenA700 } from 'material-ui/styles/colors'
import RemoveSvgIcon from 'material-ui/svg-icons/content/remove-circle-outline'
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle
} from 'material-ui/Toolbar'
import UserList from './user-list'

const styles = {
  toolIcon: {
    marginRight: 10
  },
  toolTitle: {
    marginLeft: 24
  }
}

class User extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  // constructor (props) {
  //   super(props)
  //
  //   this.state = {
  //     selected: [1]
  //   }
  // }

  handleAddUser = () => {
    console.log('Add user clicked!')
  }

  handleRemoveUsers = () => {
    console.log('Remove users? ', this.selected)
  }

  componentDidMount () {
    this.props.actions.fetchUsers()
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps: ', nextProps)
    console.log('users: ', this.props.users)
  }

  render () {
    const { users } = this.props
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild>
            <ToolbarTitle style={styles.toolTitle} text='Users' />
          </ToolbarGroup>
          <ToolbarGroup>
            <AddSvgIcon
              style={styles.toolIcon}
              color={green500}
              hoverColor={greenA700}
              onTouchTap={this.handleAddUser}
            />
            <RemoveSvgIcon
              style={styles.toolIcon}
              color={red500}
              hoverColor={redA100}
              onTouchTap={this.handleRemoveUsers}
            />
          </ToolbarGroup>
        </Toolbar>
        <UserList users={users} />
      </div>
    )
  }
}

export default User
