import reducer, { INITIAL_STATE } from '../../reducers/WatchReducer';
import * as actions from '../../actions/WatchActions';

describe('WatchReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle fetchWatchReposStart', () => {
    expect(reducer(INITIAL_STATE, actions.fetchWatchReposStart()))
      .toEqual({
        isLoading: true,
        error: null,
        repositories: [],
      });
  });

  it('should handle fetchWatchReposSuccess', () => {
    expect(reducer(
      {
        isLoading: true,
        error: null,
        repositories: [],
      }, actions.fetchWatchReposSuccess(
        [
          {name: 'repo1'},
          {name: 'repo2'},
          {name: 'repo3'},
        ]
      )
    ))
      .toEqual({
        isLoading: false,
        error: null,
        repositories: [{name: 'repo1'}, {name: 'repo2'}, {name: 'repo3'}],
      });
  });

  it('should handle fetchWatchReposFail', () => {
    const err = new Error('error test');
    expect(reducer(
      {
        isLoading: true,
        error: null,
        repositories: [],
      }, actions.fetchWatchReposFail(err)
    ))
      .toEqual(
        {
          isLoading: false,
          error: err,
          repositories: [],
        }
      );
  });

});
