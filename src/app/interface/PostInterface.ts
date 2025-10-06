import type { GetAllPost } from "../../domain/dto/post.ts";
import type { Post } from "../../generated/prisma/index.js";

export interface PostRepositoryInterface {
  getAll(type: string): Promise<Post[]>;
}

export interface PostUsecaseInterface {
  getAll(type: string): GetAllPost[];
}
