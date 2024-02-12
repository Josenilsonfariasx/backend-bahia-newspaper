import { Request, Response } from "express";
import { ListUserByIdService } from "../../services/user/ListUserByIdService";

class ListUserByIdController {
  async handle(req: Request, res: Response) {
    const UserId = req.params.id as string
    const listUserByIdService = new ListUserByIdService()
    const user = await listUserByIdService.execute({
      UserId: UserId
    })
    return res.json(user)
  }
}

export { ListUserByIdController };