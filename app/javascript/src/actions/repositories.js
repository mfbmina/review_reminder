import axios from 'axios';

export const REQUEST_REPOSITORIES = 'REQUEST_REPOSITORIES';
export const RECEIVE_REPOSITORIES = 'RECEIVE_REPOSITORIES';
export const HANDLE_REPOSITORIES_ERROR = 'HANDLE_REPOSITORIES_ERROR';

function requestRepositories() {
  return { type: REQUEST_REPOSITORIES };
}

function receiveRepositories(data) {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_REPOSITORIES,
      data: data.data,
    });
  };
}

function handleRepositoriesError(error) {
  return (dispatch) => {
    dispatch({
      type: HANDLE_REPOSITORIES_ERROR,
      error,
    });
  };
}

export function fetchRepositories() {
  return (dispatch) => {
    dispatch(requestRepositories());
    return axios.get('/api/repositories', {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    })
      .then(res => dispatch(receiveRepositories(res)))
      .catch(err => dispatch(handleRepositoriesError(err)));
  };
}

export function syncRepositories() {
  return (dispatch) => {
    dispatch(requestRepositories());
    return axios.get('/api/repositories/sync', {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    })
      .then(res => dispatch(receiveRepositories(res)))
      .catch(err => dispatch(handleRepositoriesError(err)));
  };
}
