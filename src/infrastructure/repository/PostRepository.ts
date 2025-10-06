import type { PostRepositoryInterface } from "../../app/interface/PostInterface.js";
import type { Post, PostType } from "../../generated/prisma/index.js";
import prismaClient from "../database/prismaClient.js";

export class PostRepository implements PostRepositoryInterface {
  async getAll(type: string): Promise<Post[]> {
    return await prismaClient.post.findMany({
      where: {
        type: type as PostType,
      },
    });
  }
}
