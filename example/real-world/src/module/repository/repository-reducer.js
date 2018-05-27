import * as types from './repository-action-types';

const initialState = {
  isFetching: false,
  repositories: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REPOSITORIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.REPOSITORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        repositories: action.repositories,
      };
    case types.REPOSITORIES_FAIL:
      return {
        ...state,
        isFetching: false,
        repositories: [],
        error: action.err,
      };
    default:
      return state;
  }
};

export default reducer;
