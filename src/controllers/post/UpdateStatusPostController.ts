import { Request, Response } from "express";
import { UpdateStatusPostService } from "../../services/post/UpdateStatusPostService";

class UpdateStatusPostController {
  async handle(req: Request, res: Response) {
    const id = req.params.id
    const  { published } = req.body
    const updateStatusPostService = new UpdateStatusPostService()
    const post = await updateStatusPostService.execute({ id, published })
    return res.json(post)
  }
}

export { UpdateStatusPostController };