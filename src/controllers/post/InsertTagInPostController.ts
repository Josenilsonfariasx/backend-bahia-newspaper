import { Request, Response } from "express";
import { InsertTagInPostService } from "../../services/post/InsertTagInPostService";

class InsertTagInPostController {
  async handle(req: Request, res: Response) {
    const { tag_id } = req.body
    const post_id  = req.params.id as string
    const insertTagInPostService = new InsertTagInPostService()
    const post = await insertTagInPostService.execute({ post_id, tag_id })
    return res.json(post)
  }
}

export { InsertTagInPostController };