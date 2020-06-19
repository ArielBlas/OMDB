import axios from 'axios';
import { MOVIE_DETAIL } from '../constants';

const movieDetail = (movie) => ({
    type: MOVIE_DETAIL,
    movie,
});

export const fetchMovieDetail = function (movie) {
  return function (dispatch, getState) {
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&t=${movie}`)
      .then(res => {
        dispatch(movieDetail(res.data));
      })
  };
};