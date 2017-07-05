import { createAction } from 'redux-actions';
import axios from 'axios';
import * as types from '../constants/SearchActionTypes';
import { apiRoot } from '../constants';

export const updateQueryString = createAction(types.UPDATE_QUERY_STRING, data => data);

export const searchReposStart = createAction(types.SEARCH_REPOS_START);
export const searchReposSuccess = createAction(types.SEARCH_REPOS_SUCCESS, data => data);
export const searchReposFail = createAction(types.SEARCH_REPOS_FAIL, data => data);

export const clearResult = createAction(types.CLEAR_RESULT);


export const searchRepos = (query) => {
  return (dispatch, getState) => {
    dispatch(searchReposStart());

    return axios.get(`${apiRoot}/search/repositories?q=${query}`)
      .then(res => {
        // check latest queryString
        const { queryString } = getState().search;
        if (query === queryString) {
          dispatch(searchReposSuccess(res.data.items));
        }
      })
      .catch(err => {
        dispatch(searchReposFail(err));
      });

  }
}

