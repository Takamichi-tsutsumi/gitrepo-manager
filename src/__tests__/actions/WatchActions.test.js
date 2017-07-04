import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http'
import * as actions from '../../actions/WatchActions';
import * as types from '../../constants/WatchActionTypes';
import { INITIAL_STATE } from '../../reducers/WatchReducer'
import { apiRoot } from '../../constants/index';

axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async WatchActions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_TODO_SUCCESS when fetching repos has been done', () => {
    nock(apiRoot)
      .get('/user/subscriptions')
      .reply(200, [
        // just return name, full_name, id
        {id: 0, name: 'repo1', full_name: 'user/repo1'},
        {id: 1, name: 'repo2', full_name: 'user/repo2'},
        {id: 2, name: 'repo3', full_name: 'user/repo3'}
      ]);


    const expectedActions = [
      { type: types.FETCH_WATCH_REPOS_START },
      {
        type: types.FETCH_WATCH_REPOS_SUCCESS,
        payload: [
          {id: 0, name: 'repo1', full_name: 'user/repo1'},
          {id: 1, name: 'repo2', full_name: 'user/repo2'},
          {id: 2, name: 'repo3', full_name: 'user/repo3'}
        ]
      }
    ]

    const store = mockStore({ watch: INITIAL_STATE });


    return store.dispatch(actions.fetchWatchRepos())
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      });
  });

  it('creates FETCH_TODO_FAIL when response is error', () => {
     nock(apiRoot)
      .get('/user/subscriptions')
      .replyWithError({ 'message': 'Network Error'});
     const expectedActions = [
      { type: types.FETCH_WATCH_REPOS_START },
      { type: types.FETCH_WATCH_REPOS_FAIL }
    ]

    const store = mockStore({ watch: INITIAL_STATE });

    return store.dispatch(actions.fetchWatchRepos())
      .then(() => {
        // return of async actions
        expect(store.getActions()[1].type).toEqual(types.FETCH_WATCH_REPOS_FAIL);
      });
  })

});

