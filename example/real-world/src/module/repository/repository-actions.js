import * as types from './repository-action-types';

export const repositoryFetch = () => {
  return {
    type: types.REPOSITORIES_REQUEST,
  };
};

export const repositorySuccess = repositories => {
  return {
    type: types.REPOSITORIES_SUCCESS,
    repositories,
  };
};

export const repositoryFail = error => {
  return {
    type: types.REPOSITORIES_FAIL,
    error,
  };
};

export const fetchRepositories = () => {
  return (dispatch, getState) => {
    dispatch(repositoryFetch());
    fetch('https://api.github.com/repositories')
      .then(
        res => res.json(),
        err => {
          dispatch(repositoryFail(err));
        }
      )
      .then(repositories => {
        dispatch(repositorySuccess(repositories));
      });
  };
};
