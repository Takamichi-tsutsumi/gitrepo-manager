import _ from 'lodash';
import * as SearchActionTypes from '../constants/SearchActionTypes';
import * as WatchActionTypes from '../constants/WatchActionTypes';

test('ActionTypes must not be duplicated with its name', () => {
  const arr = [
    ..._.values(SearchActionTypes),
    ..._.values(WatchActionTypes),
  ];

  expect(arr).toEqual(_.uniq(arr));
});
