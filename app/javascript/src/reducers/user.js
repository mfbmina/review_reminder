import {
  REQUEST_USER,
  RECEIVE_USER,
  HANDLE_USER_ERROR,
  HANDLE_USER_LOGOUT,
} from '../actions/user';

export default function (state = {
  user: {},
  isFetching: false,
  error: false,
}, action) {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_USER:
      return {
        ...state,
        user: action.data,
        isFetching: false,
      };
    case HANDLE_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case HANDLE_USER_LOGOUT:
      return {
        ...state,
        user: {},
        isFetching: false,
      };
    default:
      return state;
  }
}
