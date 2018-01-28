import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

class User extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      selected: [1]
    }
  }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1
  }

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows
    })
  }

  componentDidMount () {
    this.props.actions.fetchUsers()
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps: ', nextProps)
    console.log('users: ', this.props.users)
  }

  renderRows = (users) => {
    if (!users || users.size < 1) {
      return (
        <TableRow selected={this.isSelected(0)}>
          <TableRowColumn>Loading...</TableRowColumn>
        </TableRow>
      )
    }
    return users.map((user, index) => {
      return (
        <TableRow key={index} selected={this.isSelected(index)}>
          <TableRowColumn>{user.id}</TableRowColumn>
          <TableRowColumn>{user.name}</TableRowColumn>
          <TableRowColumn>{user.role}</TableRowColumn>
        </TableRow>
      )
    })
  }

  renderTable = (users) => {
    return (
      <Table onRowSelection={this.handleRowSelection} multiSelectable={false}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Role</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderRows(users)}
        </TableBody>
      </Table>
    )
  }

  render () {
    const { users } = this.props
    return (
      <div className='column-container'>
        <h1>Users</h1>
        {this.renderTable(users)}
      </div>
    )
  }
}

export default User
