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

class UserList extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired
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
    console.log('handleRowSelection, current list', this.state.selected)
    console.log('handleRowSelection, new list, ', selectedRows)
    this.setState({
      selected: selectedRows
    })
  }

  anyRowsSelected = () => {
    return this.state.selected.length > 0
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

  render () {
    const { users } = this.props
    return (
      <Table onRowSelection={this.handleRowSelection} multiSelectable>
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
}

export default UserList
