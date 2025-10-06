import type { PostUsecaseInterface } from "../../../app/interface/PostInterface.js";
import type { Request, Response } from "express";
import type { GetAllPost } from "../../../domain/dto/post.js";
import type {
  DataResponse,
  MessageResponse,
} from "../../../domain/dto/response.js";

export class PostController {
  readonly postUsecase: PostUsecaseInterface;

  constructor(postUsecase: PostUsecaseInterface) {
    this.postUsecase = postUsecase;
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const type = (req.query["type"] as string) || "news";
      const posts: GetAllPost[] = await this.postUsecase.getAll(type);

      const response: DataResponse<GetAllPost[]> = {
        status: true,
        message: `success get all posts of type '${type}'`,
        data: posts,
      };

      res.status(200).json(response);
    } catch (errror) {
      let message = "Internal Server Error";

      if (errror instanceof Error) {
        message = errror.message;
      }

      const response: MessageResponse = {
        status: false,
        message,
      };

      res.status(500).json(response);
    }
  };
}
