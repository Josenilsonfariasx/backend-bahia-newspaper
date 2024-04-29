import { Request, Response } from "express";
import { DeleteAdService } from "../../services/ad/DeleteAdService";

class DeleteAdControler {
  async handle(req: Request, res: Response) {
    const ad_id = req.params.id;
    const deleteAdService = new DeleteAdService();
    const ad = await deleteAdService.execute({ ad_id });
    return res.json(ad);
  }
}

export { DeleteAdControler };