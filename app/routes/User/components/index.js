import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddSvgIcon from 'material-ui/svg-icons/content/add-circle-outline'
import { red500, green500 } from 'material-ui/styles/colors'
import RemoveSvgIcon from 'material-ui/svg-icons/content/remove-circle-outline'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
// import {
//   Toolbar,
//   ToolbarGroup,
//   ToolbarTitle
// } from 'material-ui/Toolbar'

const iconStyles = {
  marginRight: 12
}

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

  anyRowsSelected = () => {
    return this.state.selected.length > 0
  }

  setRemoveIconColor = () => {
    if (this.anyRowsSelected()) {
      return {red500}
    }
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
      <div>
        <h1 align='center'>Users</h1>
        <div align='right'>
          <AddSvgIcon style={iconStyles} color={green500} />
          <RemoveSvgIcon style={iconStyles} color={red500} />
        </div>
        {this.renderTable(users)}
      </div>
    )
  }
}

export default User
