import { PostRepository } from "./infrastructure/repository/PostRepository.js";
import { PostUsecase } from "./app/use_case/PostUsecase.js";
import { PostController } from "./infrastructure/webserver/controller/PostController.js";
import { postRouter } from "./infrastructure/webserver/routes/postRoute.js";
import { createServer } from "./infrastructure/webserver/server.js";
import type { Router } from "express";

const postRepository = new PostRepository();
const postUsecase = new PostUsecase(postRepository);
const postController = new PostController(postUsecase);

const postRoutes: Router = postRouter(postController);

const app = createServer([postRoutes]);
const PORT = process.env["PORT"] || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
