import { Request, Response } from "express";
import { ListAllPostService } from "../../services/post/ListAllPostService";

class ListAllPostController {
  async handle(req: Request, res: Response) {
    const listAllPostService = new ListAllPostService()
    const posts = await listAllPostService.execute()
    return res.json(posts)
  }
}

export { ListAllPostController };