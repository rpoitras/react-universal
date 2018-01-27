import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
    this.props.actions.fetchUsers()
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps: ', nextProps)
    console.log('users: ', this.props.users)
  }

  renderList = (users) => {
    if (!users || users.size < 1) {
      return <li>Loading...</li>
    }
    console.log('User list:', users)
    return users.map((user, index) => {
      return <li key={index}>{user.name}</li>
    })
  }

  render () {
    const { users } = this.props
    return (
      <div>
        <h1>This will be the User Page</h1>
        <ul>{this.renderList(users)}</ul>
      </div>
    )
  }
}

export default User
