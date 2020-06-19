import axios from 'axios';
import { LOGIN_AUTH, USER_AUTH } from '../constants';

const loginAuth = (data) => ({
    type: USER_AUTH,
    data
})

const login = (data) => ({
  type: LOGIN_AUTH,
  data
})
  
export const fetchLogin = function (email, password) {
    return function (dispatch, getState) {
      axios.post(`http://localhost:3000/api/auth/login`, { email, password })
        .then(res => {
          dispatch(loginAuth(res.data)); 
          dispatch(login(res.data));    
        })
    };
};

export const fetchLogout = function () {
  return function (dispatch, getState) {
    axios.get(`http://localhost:3000/api/auth/logout`)
      .then(res => {
        dispatch(loginAuth({}));   
      })
  };
};