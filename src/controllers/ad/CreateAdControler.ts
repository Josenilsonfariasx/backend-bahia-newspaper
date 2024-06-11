import { Request, Response } from "express";
import { CreateAdService } from "../../services/ad/CreateAdService";

class CreateAdControler {
  async handle(req: Request, res: Response) {
    const { description, link, type } = req.body;
    const files = req.files as Express.Multer.File[];
    const createAdService = new CreateAdService();
    const ad = await createAdService.execute({ description, files, link, type });
    return res.json(ad);
  }
}

export { CreateAdControler };
