import React from "react";
import { connect } from 'react-redux'
import Search from "../components/Search";


function mapStateToProps(state){
  return {
    movieList: state.search.list,
    inputMovie: state.search.text,
    data: state.auth.data,
  };
}

class FavoritesContainer extends React.Component {

    render(){
        return(
            <div>
            <Search movieList={this.props.inputMovie} buscado={this.props.movieList} handleClickFavs={this.handleClickFavs}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(FavoritesContainer);