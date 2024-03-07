import { Request, Response } from "express";
import { GetCategoryByIdService } from "../../services/category/GetCategoryByIdService";

class GetCategoryByIdController {
  async handle(req: Request, res: Response) {
    const id  = req.params.id as string
    const getCategoryByIdService = new GetCategoryByIdService()
    const category = await getCategoryByIdService.execute({ id })
    return res.json(category)
  }
}

export { GetCategoryByIdController };