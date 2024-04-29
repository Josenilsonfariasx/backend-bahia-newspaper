import { Request, Response } from "express";
import { UpdateAdService } from "../../services/ad/UpdateAdService";

class UpdateAdControler {
  async handle(req: Request, res: Response) {
  const ad_id = req.params.id as string
  const { description, link } = req.body
  const files = req.files as Express.Multer.File[]
  const updateAdService = new UpdateAdService()
  const ad = await updateAdService.execute({ ad_id, description, link, files })
  return res.json(ad)
  }
}

export { UpdateAdControler };