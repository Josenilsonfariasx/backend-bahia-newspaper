import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController {
  async handle(req: Request, res: Response) {
    const files: Express.Multer.File[] = req.files as Express.Multer.File[]
    const { title, content } = req.body
    const createPostService = new CreatePostService()
    const post = await createPostService.execute({ title, content, files })
    return res.json(post)
  }
}

export { CreatePostController };