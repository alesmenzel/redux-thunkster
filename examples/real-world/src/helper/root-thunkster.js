import * as thunksters from '../module/thunksters';

const rootThunkster = (...args) => {
  Object.keys(thunksters).forEach(thunkster => {
    thunksters[thunkster](...args);
  });
};

export default rootThunkster;
