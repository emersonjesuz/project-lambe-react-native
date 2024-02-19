import {combineReducers, configureStore} from '@reduxjs/toolkit';
import postsReducer from './reduces/Post';
import userReducer from './reduces/Users';

const reducers = combineReducers({
  posts: postsReducer,
  user: userReducer,
});

export const storeConfig = configureStore({
  reducer: reducers,
  middleware: Gdm =>
    Gdm({
      thunk: true,
    }),
});
