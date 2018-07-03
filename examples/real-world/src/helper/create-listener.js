const createListener = listeners => (action, dispatch, getState) => {
  if (!listeners[action.type]) {
    return;
  }

  return listeners[action.type](action, dispatch, getState);
};

export default createListener;
