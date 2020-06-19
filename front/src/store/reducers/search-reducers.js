import { SEARCH_MOVIE, INPUT_MOVIE } from '../actions/constants';

const initialState = { list: [], text: "" };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE: 
      return { ...state, list: action.movie}
    case INPUT_MOVIE: 
      return { ...state, text: action.text}
    default: 
      return state;
  }
}