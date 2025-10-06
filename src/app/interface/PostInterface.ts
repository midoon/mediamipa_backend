import type { GetAllPost } from "../../domain/dto/post.ts";
import type { Post } from "../../domain/entity/Post.js";

export interface PostRepositoryInterface {
  getAll(type: string): Promise<Post[]>;
}

export interface PostUsecaseInterface {
  readonly postRepository: PostRepositoryInterface;
  getAll(type: string): Promise<GetAllPost[]>;
}
