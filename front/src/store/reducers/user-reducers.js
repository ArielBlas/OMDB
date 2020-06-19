import { SET_USER } from '../actions/constants';

const initialState = { 
    data: {},
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_USER: 
        return { ...state, data: action.user}
    default: 
       return state;
  }
}