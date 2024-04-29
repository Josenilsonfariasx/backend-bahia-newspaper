import { Request, Response } from "express";
import { ListAllAdService } from "../../services/ad/ListAllAdService";

class ListAllAdControler {
  async handle(req: Request, res: Response) {
    const listAllService = new ListAllAdService()
    const ads = await listAllService.execute()
    return res.json(ads)
  }
}

export { ListAllAdControler };