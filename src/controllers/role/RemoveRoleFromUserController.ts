import { Request, Response } from "express";
import { RemoveRolefromUserService } from "../../services/role/RemoveRolefromUserService";

class RemoveRoleFromUserController {
  async handle(req: Request, res: Response) {
    const {RoleId} = req.body
    const UserId = req.user_id
    const removeRolefromUserService = new RemoveRolefromUserService()
    const role = await removeRolefromUserService.execute({RoleId, UserId})
    return res.json(role)
  }
}

export { RemoveRoleFromUserController };