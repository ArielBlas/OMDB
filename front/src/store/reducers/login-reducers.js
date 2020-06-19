import { LOGIN_AUTH} from '../actions/constants';

const initialState = { email: "", password: "", logeado: {} };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_AUTH: 
      return { ...state, email: action.email, password: action.password, logeado: action.logeado}
    default: 
      return state;
  }
}