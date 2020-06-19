import axios from 'axios';
import { SET_USER } from '../constants';

const setUser = (user) => ({
    type: SET_USER,
    user,
});

export const fetchUser = function (id) {
    return function (dispatch, getState) {
      axios.get(`http://localhost:3000/api/users/${id}`)
        .then(res => {
          dispatch(setUser(res.data));
        })
    };
};