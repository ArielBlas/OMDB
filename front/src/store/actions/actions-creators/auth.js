import axios from 'axios';
import { USER_AUTH } from '../constants';

const userAuth = (data) => ({
    type: USER_AUTH,
    data,
});

export const fetchUserAuth = function () {
  return function (dispatch, getState) {
    axios.get(`http://localhost:3000/api/users/me`)
      .then(res => {
        dispatch(userAuth(res.data));
    })
  };
};

