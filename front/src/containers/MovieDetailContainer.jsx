import React from "react";
import { connect } from "react-redux";
import MovieDetail from "../components/MovieDetail";
import { fetchMovieDetail } from '../store/actions/actions-creators/movie'
import { fetchCreateFavs } from '../store/actions/actions-creators/favorites'


const mapStateToProps = function (state, ownProps) {
  const movieName = ownProps.match.params.movieId;
  return {
    data: state.auth.data,
    movie: state.movie.movie,
    movieName,
    favs: state.favs.data
  };
};
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchMovieDetail: (movie) => dispatch(fetchMovieDetail(movie)),
    fetchCreateFavs: (title, plot, poster, userId) => dispatch(fetchCreateFavs(title, plot, poster, userId)),
  };
};

class MovieDetailContainer extends React.Component {

  constructor(){
    super()

    this.handleClickFavs = this.handleClickFavs.bind(this)
  }

    componentDidMount() {
        this.props.fetchMovieDetail(this.props.movieName);
    }

    handleClickFavs(title, plot, poster){
      
      if(this.props.data.id){
        console.log('Estas autenticado')
        
        this.props.fetchCreateFavs(title, plot, poster, this.props.data.id)
        
      }
      console.log('No estas autenticado')
    }

    render() {
    return (
        <div>
            <MovieDetail movieName={this.props.movieName} movie={this.props.movie} handleClickFavs={this.handleClickFavs}/>
        </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainer);
