import axios, {AxiosResponse} from 'axios';
import {addCommentTypes} from '../../types/Comments';
import PostTypes from '../../types/Post';
import {ADD_COMMENT, ADD_POST} from './ActionsTypes';

export const addPost = (post: PostTypes) => {
  return async (dispatch: any) => {
    const {config} = await axios
      .post('/posts.json', {...post})
      .catch(err => console.log(err + 'erro'));

    dispatch({
      type: ADD_POST,
      payload: config.data,
    });
  };
  // return {
  //   type: ADD_POST,
  //   payload: post,
  // };
};

export const addComment = (dataToAddComment: addCommentTypes) => {
  return {
    type: ADD_COMMENT,
    payload: dataToAddComment,
  };
};
