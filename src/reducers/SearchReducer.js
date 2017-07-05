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
    ...state,
    isLoading: true,
    error: null,
  }),
  [Actions.searchReposSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    resultList: action.payload,
    error: null,
  }),
  [Actions.searchReposFail]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload,
  }),
  [Actions.clearResult]: (state) => ({
    ...INITIAL_STATE
  }),
}, INITIAL_STATE);

export default SearchReducer;

