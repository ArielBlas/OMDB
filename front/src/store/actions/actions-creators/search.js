import axios from 'axios';
import { SEARCH_MOVIE, INPUT_MOVIE } from '../constants';

const searchMovie = (movie) => ({
    type: SEARCH_MOVIE,
    movie,
});

export const fetchSearchMovie = function (movie) {
  return function (dispatch, getState) {
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${movie}`)
      .then(res => {
        dispatch(searchMovie(res.data.Search));
      })
  };
};

const inputMovie = (text) => ({
  type: INPUT_MOVIE,
  text
})

export const findMovie = (text) => (dispatch) => {
  dispatch(inputMovie(text));
}