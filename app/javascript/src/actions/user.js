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
    return axios.get('/api/user', {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    })
      .then(res => dispatch(receiveUser(res)))
      .catch(err => dispatch(handleUserError(err)));
  };
}

export function handleLogout() {
  return (dispatch, getState) => {
    return axios.delete('/api/user/sign_out', {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    })
      .then(() => dispatch(handleUserLogout()))
      .then(() => dispatch(getState.history.push('/')));
  };
}
