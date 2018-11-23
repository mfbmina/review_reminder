import {
  REQUEST_REPOSITORIES,
  RECEIVE_REPOSITORIES,
  HANDLE_REPOSITORIES_ERROR,
  REQUEST_REPOSITORY,
  RECEIVE_REPOSITORY,
  HANDLE_REPOSITORY_ERROR,
} from '../actions';

export default function (state = {
  repositories: [],
  isFetching: false,
  error: false,
}, action) {
  switch (action.type) {
    case REQUEST_REPOSITORIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_REPOSITORIES:
      return {
        ...state,
        repositories: action.data,
        isFetching: false,
      };
    case HANDLE_REPOSITORIES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case REQUEST_REPOSITORY:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_REPOSITORY:
      return {
        ...state,
        repositories: action.data,
        isFetching: false,
      };
    case HANDLE_REPOSITORY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
