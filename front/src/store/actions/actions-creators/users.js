import axios from 'axios';
import { SET_USERS} from '../constants';

const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const fetchUsers = function () {
    return function (dispatch, getState) {
      axios.get(`http://localhost:3000/api/users`)
        .then(res => {
          dispatch(setUsers(res.data));
        })
    };
};

export const fetchUserSearch = function (name) {
  return function (dispatch, getState) {
    axios.post(`/api/users/search`, {
      name
    })
    .then(res => {
      dispatch(setUsers(res.data));
    })
  }
}