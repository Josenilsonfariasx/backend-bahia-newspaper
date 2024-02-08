import { Request, Response } from "express";
import { RemovePermissionUserService } from "../../services/permissions/RemovePermissionUserService";

class RemovePermissionUserController {
  async handle(req:Request, res:Response) {
    const {permissionId} = req.body
    const userId = req.user_id as string
    const removePermissionUserService = new RemovePermissionUserService()
    const user = removePermissionUserService.execute({
      permissionId,
      userId
    })
    return res.json(user)
  }
}
export { RemovePermissionUserController };