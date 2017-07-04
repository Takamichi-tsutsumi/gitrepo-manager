import { handleActions } from 'redux-actions';
import * as Actions from '../actions/SearchActions';

export const INITIAL_STATE = {
  isLoading: false,
  queryString: '',
  resultList: [],
  error: null,
};

const SearchReducer = handleActions({
  [Actions.updateQueryString]: (state, action) => ({
    ...state,
    queryString: action.payload
  }),
  [Actions.searchReposStart]: (state) => ({
    isLoading: true,
    error: null,
    ...state,
  }),
  [Actions.searchReposSuccess]: (state, action) => ({
    ...state,
    resultList: action.payload,
    error: null,
  }),
  [Actions.searchReposFail]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
  [Actions.clearResult]: (state) => ({
    ...INITIAL_STATE
  }),
}, INITIAL_STATE);

export default SearchReducer;

