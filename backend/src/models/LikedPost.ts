import { model, Schema, Types, InferSchemaType } from "mongoose";

const LikedPostSchema = new Schema({
  likeStatus: { type: Boolean, required: true },
  user: [{ type: Types.ObjectId, ref: "User", required: true }],
});

type ILikedPost = InferSchemaType<typeof LikedPostSchema>;

export const LikedPost = model<ILikedPost>("LikedPost", LikedPostSchema);
