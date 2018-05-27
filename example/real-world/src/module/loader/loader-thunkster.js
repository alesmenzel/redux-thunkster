import * as actions from './loader-actions';

const listener = (action, dispatch, getState) => {
  switch (action.type) {
    case 'repository::REPOSITORIES_REQUEST':
      dispatch(actions.startLoading());
      break;

    case 'repository::REPOSITORIES_SUCCESS':
    case 'repository::REPOSITORIES_FAIL':
      dispatch(actions.stopLoading());
      break;

    default:
      break;
  }
};

export default listener;
