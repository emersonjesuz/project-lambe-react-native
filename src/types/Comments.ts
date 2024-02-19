export type CommentType = {
  nickname: string;
  comment: string;
};

export type addCommentTypes = {
  comment: CommentType;
  postID: number;
};
