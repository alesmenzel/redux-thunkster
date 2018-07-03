import createReducer from '../../helper/create-reducer';
import * as types from './repository-action-types';

const initialState = {
  isFetching: false,
  repositories: [],
  error: null,
};

const reducers = {
  [types.REPOSITORIES_REQUEST]: state => ({
    ...state,
    isFetching: true,
  }),
  [types.REPOSITORIES_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    repositories: action.repositories,
  }),
  [types.REPOSITORIES_FAIL]: (state, action) => ({
    ...state,
    isFetching: false,
    repositories: [],
    error: action.err,
  }),
};

export default createReducer(initialState, reducers);
