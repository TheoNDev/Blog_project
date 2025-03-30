import mongoose, { Schema, Types } from "mongoose";
import { IUser } from "../types/interfaces";

const userSchema: Schema = new Schema({
  userName: { type: String, required: true, unique: true },
  passWord: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  joinedAt: { type: Date, default: Date.now },
  profileImg: { type: String },
  bio: { type: String },
  profileVisibility: { type: Boolean, default: false },
  createdPosts: [{ type: Types.ObjectId, ref: "Post" }],
  likedPosts: [{ type: Types.ObjectId, ref: "LikedPost" }],
  commentedPosts: [{ type: Types.ObjectId, ref: "CommentedPost" }],
});

export default mongoose.model<IUser>("User", userSchema);
