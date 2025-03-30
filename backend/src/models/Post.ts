import mongoose, { Schema, Types } from "mongoose";
import { IPost } from "../types/interfaces";

const postSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  comments: [{ type: Types.ObjectId, ref: "CommentedPost" }],
  likes: [{ type: Types.ObjectId, ref: "LikedPost" }],
});

export default mongoose.model<IPost>("Post", postSchema);
