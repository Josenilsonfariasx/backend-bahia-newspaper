import { Request, Response } from "express";
import { CreatePostScheduleService } from "../../services/post/CreatePostScheduleService";

class CreatePostScheduleController {
  async handle(req: Request, res: Response) {
    const { title, content, scheduledAt } = req.body
    const files: Express.Multer.File[] = req.files as Express.Multer.File[]
    const createPostScheduleService = new CreatePostScheduleService()
    const post = await createPostScheduleService.execute({ title, content, scheduledAt, files})
    return res.json(post)
  }
}

export { CreatePostScheduleController };