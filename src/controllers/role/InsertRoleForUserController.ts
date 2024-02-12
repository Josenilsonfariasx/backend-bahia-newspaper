import { Request, Response } from "express";
import { InsertRoleForUserService } from "../../services/role/InsertRoleForUserService";

class InsertRoleForUserController {
  async handle(req: Request, res: Response) {
    const {RoleId} =  req.body
    const UserId = req.user_id

    const insertRoleForUserService = new InsertRoleForUserService()
    const roleUpdated = await insertRoleForUserService.execute({RoleId, UserId})
    
    return res.json(roleUpdated)
  }
}

export { InsertRoleForUserController };