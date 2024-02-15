import {ADD_POST} from '../actions/ActionsTypes';

const initialPost = [
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
];
