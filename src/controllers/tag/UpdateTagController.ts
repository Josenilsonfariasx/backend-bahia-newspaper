import { Request, Response } from "express";
import { UpdateTagService } from "../../services/tag/UpdateTagService";

class UpdateTagController {
  async handle(req: Request, res: Response) {
    const { id, name } = req.body
    const updateTagService = new UpdateTagService()
    const tag = await updateTagService.execute({ id, name })
    return res.json(tag)
  }
}

export { UpdateTagController };