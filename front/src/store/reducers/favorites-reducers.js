import { SET_FAVS } from '../actions/constants';

const initialState = { 
    data: [] 
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_FAVS: 
        return { ...state, data: action.favs}
    default: 
       return state;
  }
}