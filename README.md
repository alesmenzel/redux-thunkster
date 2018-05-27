# Redux Thunkster 🔭 · [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/alesmenzel/redux-thunkster/blob/master/LICENCE)

Redux middleware for observing actions and dispatching new actions based on the observed.

## Instalation

```bash
npm install --save thunkster
```

## Usage

```javascript
const { createStore, applyMiddleware } = require('redux');
const thunkster = require('thunkster');

// Sample root reducer
const reducer = (state = {}, action) => {
  return {
    ...state,
    ...action.payload,
  };
};

// Create Redux store
const store = createStore(reducer, applyMiddleware(thunkster)); // <- Add the middleware

// Thunkster
const handler = (action, dispatch, getState) => {
  // Every action will go through every subscribed handler
  if (action.type === 'ACTION') {
    // Based on the action, you can dispatch any other action (even after a delay, like a thunk)
    dispatch({
      type: 'ACTION_LISTENER',
      payload: {
        listened: true,
      },
    });
  }
};

// Subscribe to dispatcher (returns unsubscribe function)
const unsubscribe = thunkster.subscribe(handler);
```

## Why thunkster

Using `thunks` is great but their make your code more entangled. Take this simple exaple:

`"Lets display a loader when fetching data."`

Here is how a thunk could look like

```javascript
const loadData = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'SHOW_LOADER' });
    dispatch({ type: 'REQUEST' });

    fetch('/api/get-data').then(
      data => {
        dispatch({ type: 'REQUEST_SUCCESS', data });
        dispatch({ type: 'HIDE_LOADER' });
      },
      err => {
        dispatch({ type: 'REQUEST_ERR', err });
        dispatch({ type: 'HIDE_LOADER' });
      }
    );
  };
};
```

Now the data loading module is dependent on loading module. If we wanted to remove the loader for some reason, we would have to go through all modules using our loader and remove it - not very nice, is it?

So one of the option is to use something like `redux-saga` which listens on the corresponding actions (i.e. `REQUEST` and can dispatch the `SHOW_LOADER` action). This works great, but working with generators is cumbersome and usually you need to use just a few of their features. It is like a using a cannon to shoot down a fly. **Thunkster is simple, easy to implement solution for observing actions.**

## License

This project is licensed under the terms of the [MIT license](./LICENCE).
