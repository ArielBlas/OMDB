import React from "react";
import { connect } from "react-redux";
import Users from '../components/Users'
import { fetchUsers, fetchUserSearch } from '../store/actions/actions-creators/users'

const mapStateToProps = function (state, ownProps) {
  return {
    users: state.users.data
  }
};
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUserSearch: (name) => dispatch(fetchUserSearch(name))
  }
};

class UsersContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      enviar: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const value = event.target.value
    this.props.fetchUserSearch(value);
    this.setState({enviar: value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({enviar: ''})
  }

  componentDidMount(){
    this.props.fetchUsers()
  }
  render() {
    return (
        <Users users={this.props.users} handleChange={this.handleChange} handleSubmit={this.handleSubmit} enviar={this.state.enviar}/>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
