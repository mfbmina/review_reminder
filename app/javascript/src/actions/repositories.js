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

export const REQUEST_REPOSITORY = 'REQUEST_REPOSITORY';
export const RECEIVE_REPOSITORY = 'RECEIVE_REPOSITORY';
export const HANDLE_REPOSITORY_ERROR = 'HANDLE_REPOSITORY_ERROR';

function requestRepository() {
  return { type: REQUEST_REPOSITORY };
}

function receiveRepository(data) {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_REPOSITORY,
      data: data.data,
    });
  };
}

function handleRepositoryError(error) {
  return (dispatch) => {
    dispatch({
      type: HANDLE_REPOSITORY_ERROR,
      error,
    });
  };
}

export function fetchRepository(id) {
  return (dispatch) => {
    dispatch(requestRepository());
    return axios.get(`/api/repositories/${id}`, {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    })
      .then(res => dispatch(receiveRepository(res)))
      .catch(err => dispatch(handleRepositoryError(err)));
  };
}
