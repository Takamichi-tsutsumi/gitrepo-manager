import { handleActions } from 'redux-actions';
import * as Actions from '../actions/WatchActions';

export const INITIAL_STATE = {
  isLoading: false,
  error: null,
  repositories: [],
};

const WatchReducer = handleActions({
  [Actions.fetchWatchReposStart]: (state, action) => ({
    ...state,
    isLoading: true,
    error: null,
  }),
  [Actions.fetchWatchReposSuccess]: (state, action) => ({
    ...state,
    error: null,
    isLoading: false,
    repositories: action.payload,
  }),
  [Actions.fetchWatchReposFail]: (state, action) => ({
    ...state,
    error: action.payload,
    isLoading: false,
  }),

}, INITIAL_STATE);

export default WatchReducer;

