export interface IUser {
  userName: string;
  passWord: string;
  email: string;
  joinedAt: Date;
  createdPosts: IPost[];
  profileImg: string;
  bio: string;
  profileVisibility: boolean;
  likedPosts: ILikedPost[];
  commentedPosts: ICommentedPost[];
  _id: string;
}

export interface IUserSummary {
  _id: string;
  userName: string;
  profileImg: string;
}

export interface IPost {
  title: string;
  slug: string;
  content: string;
  author: IUserSummary;
  createdAt: Date;
  updatedAt?: Date;
  metaTitle?: string;
  metaDescription?: string;
  category: string;
  tags?: string[];
  visibility: "public" | "private" | "protected";
  comments: ICommentedPost[];
  likes: ILikedPost[];
  _id: string;
}

export interface ILikedPost {
  likeStats: boolean;
  user: IUserSummary;
}

export interface ICommentedPost {
  comment: string;
  createdAt: Date;
  likes: ILikedPost[];
  user: IUserSummary;
}

export interface IResponse {
  data: {
    token?: string;
    user: IUser;
  };
}
