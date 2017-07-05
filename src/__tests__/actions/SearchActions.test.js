import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http'
import * as actions from '../../actions/SearchActions';
import * as types from '../../constants/SearchActionTypes';
import { INITIAL_STATE } from '../../reducers/SearchReducer'
import { apiRoot } from '../../constants/index';

axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('SearchActions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('searchRepos async', () => {
    nock(apiRoot)
      .get('/search/repositories')
      .query({q: 'repo'})
      .reply(200, {
        items: [
          {id: 0, name: 'repo1', full_name: 'user/repo1'},
          {id: 1, name: 'repo2', full_name: 'user/repo2'},
          {id: 2, name: 'repo3', full_name: 'user/repo3'},
        ],
      });

    it('creates SEARCH_REPOS_SUCCESS after searchRepos if queryString is latest', () => {
      const expectedActions = [
        { type: types.SEARCH_REPOS_START },
        {
          type: types.SEARCH_REPOS_SUCCESS,
          payload: [
            {id: 0, name: 'repo1', full_name: 'user/repo1'},
            {id: 1, name: 'repo2', full_name: 'user/repo2'},
            {id: 2, name: 'repo3', full_name: 'user/repo3'},
          ],
        },
      ];

      const store = mockStore({
        search: {
          ...INITIAL_STATE,
          queryString: 'repo',
        }
      });

      return store.dispatch(actions.searchRepos('repo'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('does not create SEARCH_REPOS_SUCCESS after searchRepos if queryString is not latest', () => {
      const expectedActions = [{ type: types.SEARCH_REPOS_START }];

      const store = mockStore({
        search: {
          ...INITIAL_STATE,
          queryString: 'repop',
        }
      });

      return store.dispatch(actions.searchRepos('repo'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

});
