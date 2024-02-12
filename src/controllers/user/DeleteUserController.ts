import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const UserId = req.params.id as string
    const deleteUserService = new DeleteUserService()
    const user = await deleteUserService.execute({
      UserId: UserId
    })
    return res.json(user)
  }
}

export { DeleteUserController };