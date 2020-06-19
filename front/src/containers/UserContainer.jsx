import React from "react";
import { connect } from "react-redux";
import User from '../components/User';
import { fetchUser } from '../store/actions/actions-creators/user'
import { fetchFavs } from '../store/actions/actions-creators/favorites'

const mapStateToProps = function (state, ownProps) {
  const userName = ownProps.match.params.userId;
  return {
    favs: state.favs.data,
    user: state.user.data,
    userName
  }
};
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchFavs: (userId) => dispatch(fetchFavs(userId))
  }
};

class UserContainer extends React.Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userName)
    this.props.fetchFavs(this.props.userName)
  }

  render() {
    return (
        <User user={this.props.user} favs={this.props.favs}/>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
