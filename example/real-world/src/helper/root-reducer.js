import { combineReducers } from 'redux';

import * as reducers from '../module';

// TODO: load modules dynamicly via webpack require.context
// const modules = require.context('../module', true, /\.js$/).keys();
// console.log('mod', modules);

// const reducers = modules.reduce((acc, moduleName) => {
//   console.log('req', moduleName);
//   const res = require('../module/' + moduleName);
//   console.log('res', res);
//   return acc;
// }, {});

const rootReducer = combineReducers(reducers);

export default rootReducer;
