import { USER_AUTH } from '../actions/constants';

const initialState = { 
    data: {}
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case USER_AUTH: 
        return { ...state, data: action.data}
    default: 
       return state;
  }
}