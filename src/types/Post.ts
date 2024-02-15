import {CommentsType} from './Comments';

type PostTypes = {
  id: number;
  nickname: string;
  email: string;
  image: any;
  comments: CommentsType[];
};

export default PostTypes;
