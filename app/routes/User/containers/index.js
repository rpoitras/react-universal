import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import User from '../components'
import { fetchUsers } from '../actions/user.actions'

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    fetchUsers: fetchUsers
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
