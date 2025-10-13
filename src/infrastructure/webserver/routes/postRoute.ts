import type { PostController } from "../controller/PostController.js";
import express from "express";

export const postRouter = (postController: PostController) => {
  const router = express.Router();

  router.get("/api/posts", postController.getAll);
  router.get("/api/posts/:postId", postController.getById);

  return router;
};
