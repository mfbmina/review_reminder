import axios from 'axios';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const HANDLE_USER_ERROR = 'HANDLE_USER_ERROR';
export const HANDLE_USER_LOGOUT = 'HANDLE_USER_LOGOUT';

function requestUser() {
  return { type: REQUEST_USER };
}

function receiveUser(data) {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_USER,
      data: data.data,
    });
  };
}

function handleUserError(error) {
  return (dispatch) => {
    dispatch({
      type: HANDLE_USER_ERROR,
      error,
    });
  };
}

function handleUserLogout() {
  return (dispatch) => {
    dispatch({
      type: HANDLE_USER_LOGOUT,
    });
  };
}

export function fetchUser() {
  return (dispatch) => {
    dispatch(requestUser());
    return axios.get('/api/user')
      .then(res => dispatch(receiveUser(res)))
      .catch(err => dispatch(handleUserError(err)));
  };
}

export function handleLogout() {
  return (dispatch) => {
    return axios.delete('/api/signout')
      .then(() => dispatch(handleUserLogout()));
  };
}
