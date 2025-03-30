import { Router, Request, Response } from "express";
import Post from "../models/Post";
import { CommentedPost } from "../models/CommentedPost";
import { ICommentedPost } from "../types/interfaces";
import { Types } from "mongoose";
import { LikedPost } from "../models/LikedPost";

const router: Router = Router();

// Create a new post
router.post(
  "/createpost",
  async (
    req: Request<{}, {}, { title: string; content: string; author: string }>,
    res: Response
  ) => {
    const { title, content, author } = req.body;
    try {
      const newPost = new Post({ title, content, author });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
);

// Add a Comment
router.post("/comment", async (req, res) => {
  try {
    const { comment, user, postId } = req.body;

    const userId: string = user;

    if (!comment || !user || !postId) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    if (!Types.ObjectId.isValid(user) || !Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ message: "Invalid user or post ID." });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    const newComment = new CommentedPost({
      comment,
      createdAt: new Date(),
      user: new Types.ObjectId(userId),
    });

    const savedComment = await newComment.save();

    post.comments.push(savedComment._id);
    await post.save();

    res.status(201).json({
      message: "Comment added successfully.",
      commentId: savedComment._id,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: "Server error.", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Server error.", error: "Unknown error" });
    }
  }
});

// Like a post
router.post("/like", async (req, res) => {
  try {
    const { postId, user, likeStatus } = req.body;

    const userId: string = user;

    if (!postId || !userId) {
      return res
        .status(400)
        .json({ error: "Post ID and User ID are required" });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const existingLike = await LikedPost.findOne({
      user: userId,
      _id: { $in: post.likes },
    });

    if (existingLike) {
      if (!likeStatus) {
        await LikedPost.findByIdAndDelete(existingLike._id);
        await Post.findByIdAndUpdate(postId, {
          $pull: { likes: existingLike._id },
        });
        return res
          .status(400)
          .json({ message: "user already liked this post" });
      }
    }

    const newLike = new LikedPost({
      likeStatus,
      user: new Types.ObjectId(userId),
    });
    await newLike.save();

    post.likes.push(newLike._id);

    res.status(201).json({ message: "Post liked successfully", like: newLike });
  } catch (error) {
    console.error("Error liking post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all posts
router.get("/", async (_req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

// Get a single post by ID
router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

export default router;
