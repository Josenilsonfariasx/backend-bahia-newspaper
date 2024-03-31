import { Request, Response } from "express";
import { DeleteImagefromPostService } from "../../services/post/DeleteImagefromPostService";

class DeleteImageFromPostController {
  async handle(req: Request, res: Response) {
    const id = req.params.id as string
    const { urlPost } = req.body
    const deleteImageFromPostService = new DeleteImagefromPostService()
    const images = await deleteImageFromPostService.execute({ id, urlPost})
    return res.json(images)
  }
}

export { DeleteImageFromPostController };