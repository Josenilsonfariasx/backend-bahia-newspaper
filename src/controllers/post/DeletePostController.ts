import { Request, Response } from "express";
import { DeletePostService } from "../../services/post/DeletePostService";

class DeletePostController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const deletePostService = new DeletePostService()
    const post = await deletePostService.execute({ id })
    return res.json(post)
  }
}

export { DeletePostController };