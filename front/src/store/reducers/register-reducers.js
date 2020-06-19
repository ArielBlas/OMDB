import { REGISTER_AUTH } from '../actions/constants';

const initialState = { name: "", email: "", password: "" };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case REGISTER_AUTH: 
      return { ...state, name: action.name, email: action.email, password: action.password}
    default: 
      return state;
  }
}