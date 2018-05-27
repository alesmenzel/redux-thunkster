const { createStore, applyMiddleware } = require('redux');
const thunkster = require('../src/thunkster');

const reducer = (state = {}, action) => {
  return {
    ...state,
    ...action.payload,
  };
};

store = createStore(reducer, applyMiddleware(thunkster));

const handler = (action, dispatch, getState) => {
  if (action.type === 'ACTION') {
    dispatch({
      type: 'ACTION_LISTENER',
      payload: {
        listened: true,
      },
    });
  }
};

const unsubscribe = thunkster.subscribe(handler);

store.dispatch({
  type: 'ACTION',
  payload: {
    a: 5,
    b: 15,
  },
});

store.dispatch({
  type: 'ACTION2',
  payload: {
    a: 5,
  },
});

store.dispatch({
  type: 'ACTION3',
  payload: {
    b: 15,
  },
});

unsubscribe();

store.dispatch({
  type: 'ACTION',
  payload: {
    a: 5,
    b: 15,
  },
});

store.dispatch({
  type: 'ACTION2',
  payload: {
    a: 5,
  },
});

store.dispatch({
  type: 'ACTION3',
  payload: {
    b: 15,
  },
});
