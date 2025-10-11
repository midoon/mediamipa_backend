import type { PostRepositoryInterface } from "../../app/interface/PostInterface.js";

import prismaClient from "../database/prismaClient.js";
import { PostType as DomainPostType, Post } from "../../domain/entity/Post.js";
import { PostType as PrismaPostType } from "../../generated/prisma/index.js";

export class PostRepository implements PostRepositoryInterface {
  async getAll(type: string): Promise<Post[]> {
    const posts = await prismaClient.post.findMany({
      where: {
        type: type as PrismaPostType,
      },
      orderBy: {
        created_at: "desc", // urutkan dari yang terbaru
      },
      take: 5, // ambil hanya 5 data teratas
    });

    return posts.map(
      (p) =>
        new Post(
          p.id,
          p.title,
          p.description,
          // konversi enum Prisma ke enum Domain
          p.type === PrismaPostType.news
            ? DomainPostType.NEWS
            : DomainPostType.ACHIEVEMENT,
          p.created_at,
          p.updated_at,
          p.image
        )
    );
  }
}
