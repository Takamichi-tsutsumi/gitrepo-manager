import { createAction } from 'redux-actions';
import * as types from '../constants/SearchActionTypes';

export const updateQueryString = createAction(types.UPDATE_QUERY_STRING, data => data);

