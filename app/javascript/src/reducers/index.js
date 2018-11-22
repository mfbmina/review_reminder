import { combineReducers } from 'redux';

import repositories from './repositories';
import user from './user';

export default combineReducers({
  repositories,
  user,
});
