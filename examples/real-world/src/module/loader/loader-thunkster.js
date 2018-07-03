import createListener from '../../helper/create-listener';
import * as actions from './loader-actions';
import * as repositoryActionTypes from '../repository';

const listeners = {
  [repositoryActionTypes.REPOSITORIES_REQUEST]: (
    action,
    dispatch,
    getState
  ) => {
    dispatch(actions.startLoading());
  },
  [repositoryActionTypes.REPOSITORIES_SUCCESS]: (
    action,
    dispatch,
    getState
  ) => {
    dispatch(actions.stopLoading());
  },
  [repositoryActionTypes.REPOSITORIES_FAIL]: (action, dispatch, getState) => {
    dispatch(actions.stopLoading());
  },
};

export default createListener(listeners);
