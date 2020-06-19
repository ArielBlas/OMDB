import { MOVIE_DETAIL } from '../actions/constants';

const initialState = { movie: {} };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case MOVIE_DETAIL: 
      return { ...state, movie: action.movie}
    default: 
      return state;
  }
}