import {combineReducers, createStore} from 'redux';

import userReducer from './reduces/Users';

const reducers = combineReducers({
  user: userReducer,
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
