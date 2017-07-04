import { combineReducers } from 'redux';
import search from './SearchReducer';
import watch from './WatchReducer';

const reducers = combineReducers({
  search,
  watch,
});

export default reducers;
