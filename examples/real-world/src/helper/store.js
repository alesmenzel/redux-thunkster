import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import thunkster from 'redux-thunkster';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';
import rootThunkster from './root-thunkster';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, thunkster))
);

thunkster.subscribe(rootThunkster);

export default store;
