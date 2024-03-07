import { Request, Response } from "express";
import { RemoveTagFromPostService } from "../../services/post/RemoveTagFromPostService";

class RemoveTagFromPostController {
  async handle(req: Request, res: Response) {
    const { tag_id } = req.body
    const post_id  = req.params.id as string
    const removeTagFromPostService = new RemoveTagFromPostService()
    const post = await removeTagFromPostService.execute({ post_id, tag_id })
    return res.json(post)
  }
}

export { RemoveTagFromPostController };