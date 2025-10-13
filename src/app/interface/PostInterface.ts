import type { PostDto } from "../../domain/dto/post.ts";
import type { Post } from "../../domain/entity/Post.js";

export interface PostRepositoryInterface {
  getAll(type: string): Promise<Post[]>;
  getAllWithLimit(type: string, limit: number): Promise<Post[]>;
  getById(id: string): Promise<Post>;
}

export interface PostUsecaseInterface {
  readonly postRepository: PostRepositoryInterface;
  getAll(type: string, limit: number): Promise<PostDto[]>;
  getById(id: string): Promise<PostDto>;
}
