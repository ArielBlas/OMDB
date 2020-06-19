import { SET_USERS } from '../actions/constants';

const initialState = { 
    data: [],
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_USERS: 
        return { ...state, data: action.users}
    default: 
       return state;
  }
}