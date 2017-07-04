import { createAction } from 'redux-actions';
import axios from 'axios';
import * as types from '../constants/WatchActionTypes';
import { apiRoot } from '../constants';

export const fetchWatchReposStart = createAction(types.FETCH_WATCH_REPOS_START);
export const fetchWatchReposSuccess = createAction(types.FETCH_WATCH_REPOS_SUCCESS, data => data);
export const fetchWatchReposFail = createAction(types.FETCH_WATCH_REPOS_FAIL, data => data);

export const fetchWatchRepos = () => {
  return dispatch => {
    dispatch(fetchWatchReposStart());

    axios.get(`${apiRoot}/user/subscriptions`)
      .then(res => {
        dispatch(fetchWatchReposSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchWatchReposFail(err));
      });
  }
};

