import React from "react";
import { connect } from 'react-redux'
import Favorites from "../components/Favorites";
import { fetchFavs, fetchDeleteFavs } from '../store/actions/actions-creators/favorites';

function mapStateToProps(state){
  return {
    data: state.favs.data,
    auth: state.auth.data
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchFavs: (userId) => dispatch(fetchFavs(userId)),
    fetchDeleteFavs: (id) => dispatch(fetchDeleteFavs(id))
  }
}

class FavoritesContainer extends React.Component {
    constructor(){
      super()

      this.handleClickDelete = this.handleClickDelete.bind(this)
    }

    componentDidMount(){
      if(this.props.auth.id){
        this.props.fetchFavs(this.props.auth.id)
      } 
    }

    handleClickDelete(id){
      this.props.fetchDeleteFavs(id)
    }

    render(){
        return(
          <Favorites favs={this.props.data} auth={this.props.auth} handleClickDelete={this.handleClickDelete} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);