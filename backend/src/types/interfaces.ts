import { JwtPayload } from "jsonwebtoken";
import { Document, Types } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
  comments: Types.ObjectId[];
  likes: Types.ObjectId[];
}

export interface ILikedPost extends Document {
  likeStatus: boolean;
  user: Types.ObjectId;
}

export interface ICommentedPost extends Document {
  comment: string;
  createdAt: Date;
  likes: Types.ObjectId[];
  user: Types.ObjectId;
}

export interface IUser extends Document {
  userName: string;
  passWord: string;
  email: string;
  joinedAt: Date;
  createdPosts: Types.ObjectId[];
  profileImg: string;
  bio: string;
  profileVisibility: boolean;
  likedPosts: Types.ObjectId[];
  commentedPosts: Types.ObjectId[];
}

export interface JwtPayloadCustom extends JwtPayload {
  id: string;
  email: string;
}

export interface SignUpRequestBody {
  userName: string;
  passWord: string;
  email: string;
}
