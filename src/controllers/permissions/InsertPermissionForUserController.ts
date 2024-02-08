import { Request, Response } from "express";
import { InsertPermissionForUserService } from "../../services/permissions/InsertPermissionForUserService";

class InsertPermissionForUserController {
  async handle(req: Request, res: Response) {
    const {permissionId} = req.body
    console.log(req.user_id)
    const insertPermissionForUserService = new InsertPermissionForUserService()
    const userUpdate = insertPermissionForUserService.execute({
      permissionId:permissionId,
      userId: req.user_id
    })
    return res.json(userUpdate)
  }
}

export { InsertPermissionForUserController };