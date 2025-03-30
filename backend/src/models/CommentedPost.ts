import { InferSchemaType, model, Schema, Types } from "mongoose";
// import { ICommentedPost } from "../types/interfaces";

const CommentedPostSchema = new Schema({
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: [{ type: Types.ObjectId, ref: "User", required: true }],
});

type ICommentedPost = InferSchemaType<typeof CommentedPostSchema>;

export const CommentedPost = model<ICommentedPost>(
  "CommentedPost",
  CommentedPostSchema
);
