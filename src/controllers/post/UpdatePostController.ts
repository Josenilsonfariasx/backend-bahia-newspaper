import { Request, Response } from "express";
import { UpdatePostService } from "../../services/post/UpdatePostService";

class UpdatePostController {
  async handle(req: Request, res: Response) {
    const { title, content, categoryId } = req.body; // Inclua categoryId
    const { id } = req.params;
    const updatePostService = new UpdatePostService();
    const post = await updatePostService.execute({ id, title, content, categoryId });
    return res.json(post);
  }
}

export { UpdatePostController };
