import { Request, Response } from "express";
import { InsertCategoryInPostService } from "../../services/post/InsertCategoryInPostService";

class InsertCategoryInPostController {
  async handle(req: Request, res: Response) {
  const { category_id } = req.body
  const post_id = req.params.id as string
  const insertCategoryInPostService = new InsertCategoryInPostService()
  const post = await insertCategoryInPostService.execute({ post_id, category_id })
  return res.json(post)
}
}

export { InsertCategoryInPostController };