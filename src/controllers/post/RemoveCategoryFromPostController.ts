import { Request, Response } from "express";
import { RemoveCategoryFromPostService } from "../../services/post/RemoveCategoryFromPostService";

class RemoveCategoryFromPostController {
  async handle(req: Request, res: Response) {
    const {category_id} = req.body
    const post_id = req.params.id as string
    const removeCategoryFromPostService = new RemoveCategoryFromPostService()
    const post = await removeCategoryFromPostService.execute({post_id, category_id})
    return res.json(post)
  }
}

export { RemoveCategoryFromPostController };