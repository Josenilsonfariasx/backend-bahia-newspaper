import { Request, Response } from "express";
import { GetAllPostsByIdCategoryService } from "../../services/post/GetAllPostByCategoryService";

class GetAllPostsByCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getPostCategory = new GetAllPostsByIdCategoryService();
    const post = await getPostCategory.execute({ id });
    return res.json(post);
  }
}

export { GetAllPostsByCategoryController };
