import { combineReducers } from 'redux';
import { SearchReducer as search } from './SearchReducer';

const reducers = combineReducers({
  search
});

export default reducers;
