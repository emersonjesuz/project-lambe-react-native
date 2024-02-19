import PostTypes from '../../types/Post';
import {ADD_COMMENT, ADD_POST} from '../actions/ActionsTypes';

const initialPost = {
  posts: [
    {
      id: Math.random(),
      nickname: 'anderson de jesus',
      email: 'andreson1234@gmail.com',
      image: require('../../../assets/imgs/boat.jpg'),
      comments: [
        {
          nickname: 'jhow arruda',
          comment: 'que lindo',
        },
        {
          nickname: 'pricila paiva',
          comment: 'saudades',
        },
        {
          nickname: 'mathues almeida',
          comment: 'cara aonde foi tirada',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'marlom eric dos santos',
      email: 'marlomeric1234@gmail.com',
      image: require('../../../assets/imgs/boat.jpg'),
      comments: [
        {
          nickname: 'jhow arruda',
          comment: 'que lindo',
        },
        {
          nickname: 'pricila paiva',
          comment: 'saudades',
        },
        {
          nickname: 'mathues almeida',
          comment: 'cara aonde foi tirada',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'david de jesus santos',
      email: 'davinho2222@gmail.com',
      image: require('../../../assets/imgs/boat.jpg'),
      comments: [],
    },
  ],
};

type ActionsTypes = {
  type: string;
  payload: any;
};

const reducer = (state = initialPost, actions: ActionsTypes) => {
  switch (actions.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({...actions.payload}),
      };

    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post: PostTypes) => {
          if (post.id === actions.payload.postID) {
            if (post.comments) {
              post.comments = post.comments.concat(actions.payload.comment);
            } else {
              post.comments = [actions.payload.comment];
            }
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
