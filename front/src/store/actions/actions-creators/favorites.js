import axios from 'axios'
import { SET_FAVS } from '../constants';

const setFavs = function (favs) {
    return {
      type: SET_FAVS,
      favs
    };
};

export const fetchCreateFavs = function (title, plot, poster, userId) {
  return function (dispatch, getState) {
    axios.post(`http://localhost:3000/api/favourite`, {
      title, plot, poster, userId })
  };
};

export const fetchFavs = function (userId) {
  return function (dispatch, getState) {
    axios.get(`http://localhost:3000/api/favourite/${userId}`,)
      .then(res => {
        dispatch(setFavs(res.data));   
      })
  };
};

export const fetchDeleteFavs = function (id) {
  return function (dispatch, getState) {
    axios.delete(`http://localhost:3000/api/favourite/${id}`,)
      
  };
};


