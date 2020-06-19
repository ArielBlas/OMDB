import axios from 'axios';
import { REGISTER_AUTH } from '../constants';

const registerAuth = (name, email, password) => ({
    type: REGISTER_AUTH,
    name,
    email,
    password
})

/*export const fetchRegister = (name, email, password) => (dispatch) => {
    dispatch(registerAuth(name, email, password)); 
}*/

export const fetchRegister = function (name, email, password) {
    return function (dispatch, getState) {
      axios.post(`http://localhost:3000/api/auth/register`, {
        name, email, password })
        .then(res => {
          dispatch(registerAuth(name, email, password));   
        })
    };
};