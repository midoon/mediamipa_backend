import type { PostDto } from "../../domain/dto/post.js";
import type { Post } from "../../domain/entity/Post.js";
import type {
  PostRepositoryInterface,
  PostUsecaseInterface,
} from "../interface/PostInterface.js";

export class PostUsecase implements PostUsecaseInterface {
  readonly postRepository: PostRepositoryInterface;
  constructor(postRepository: PostRepositoryInterface) {
    this.postRepository = postRepository;
  }

  async getAll(type: string): Promise<PostDto[]> {
    // harus pakai await karena repository.getAll() itu async
    const posts: Post[] = await this.postRepository.getAll(type);

    // mapping hasil entity Post ke DTO GetAllPost
    const result: PostDto[] = posts.map((post) => ({
      id: post.id,
      title: post.title,
      description: post.description,
      image: post.image ?? "",
      type: post.type,
      date: post.created_at,
    }));

    return result;
  }

  async getById(id: string): Promise<PostDto> {
    const post: Post = await this.postRepository.getById(id);

    const result: PostDto = {
      id: post.id,
      title: post.title,
      description: post.description,
      image: post.image ?? "",
      type: post.type,
      date: post.created_at,
    };

    return result;
  }
}
