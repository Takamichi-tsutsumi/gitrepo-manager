import reducer, { INITIAL_STATE } from '../../reducers/SearchReducer';
import * as actions from '../../actions/SearchActions';

describe('SearchReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle updateQueryString', () => {
    expect(reducer(INITIAL_STATE, actions.updateQueryString('a')))
      .toEqual({
        queryString: 'a',
        resultList: []
      });
  });

});
