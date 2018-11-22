import {
  REQUEST_REPOSITORIES,
  RECEIVE_REPOSITORIES,
  HANDLE_REPOSITORIES_ERROR,
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
    default:
      return state;
  }
}
