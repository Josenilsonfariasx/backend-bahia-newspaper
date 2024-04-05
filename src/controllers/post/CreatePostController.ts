import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController {
  async handle(req: Request, res: Response) {
    const file: Express.Multer.File = req.file as Express.Multer.File
    const { title, content } = req.body
    const createPostService = new CreatePostService()
    const post = await createPostService.execute({ title, content, file })
    return res.json(post)
  }
}

export { CreatePostController };