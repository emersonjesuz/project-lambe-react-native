import {CommentType} from './Comments';

type PostTypes = {
  id: number;
  nickname: string;
  email: string;
  image: any;
  comments: CommentType[];
};

export default PostTypes;
