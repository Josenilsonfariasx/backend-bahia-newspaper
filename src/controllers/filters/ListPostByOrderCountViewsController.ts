import { Request, Response } from "express";
import { ListPostByOrderCountViewsService } from "../../services/filters/ListPostByOrderCountViewsService";

class ListPostByOrderCountViewsController {
  async handle(req: Request, res: Response) {
    const listPostByOrderCountViewsService = new ListPostByOrderCountViewsService()
    const posts = await listPostByOrderCountViewsService.execute()
    return res.json(posts)
  }
}

export { ListPostByOrderCountViewsController };