const thunkster = store => next => action => {
  thunkster.listeners.forEach(listener => {
    listener(action, store.dispatch, store.getState);
  });

  next(action);
};

thunkster.listeners = [];

thunkster.unsubscribe = listener => {
  thunkster.listeners = thunkster.listeners.filter(item => item !== listener);
};

thunkster.subscribe = listener => {
  thunkster.listeners.push(listener);
  return () => thunkster.unsubscribe(listener);
};

export default thunkster;
