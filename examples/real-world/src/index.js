import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import registerServiceWorker from './helper/register-service-worker';
import store from './helper/store';
import App from './application/app';

import './assets/global.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
