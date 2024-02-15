import {ADD_POST} from './ActionsTypes';

export const addPost = (post: any) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
