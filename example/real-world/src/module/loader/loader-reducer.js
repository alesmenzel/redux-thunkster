import createReducer from '../../helper/create-reducer';
import * as types from './loader-action-types';

const initialState = {
  isLoading: false,
};

const reducers = {
  [types.START_LOADING]: state => ({
    ...state,
    isLoading: true,
  }),
  [types.STOP_LOADING]: state => ({
    ...state,
    isLoading: false,
  }),
};

export default createReducer(initialState, reducers);
