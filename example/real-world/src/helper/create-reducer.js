const createReducer = (initialState, reducers) => (
  state = initialState,
  action
) => {
  const reducer = reducers[action.type];

  if (!reducer) {
    return state;
  }

  return reducer(state, action);
};

export default createReducer;
