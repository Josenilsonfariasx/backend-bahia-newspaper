import { Request, Response } from "express";
import { RemovePermissionRoleService } from "../../services/permissions/RemovePermissionRoleService";

class RemovePermissionRoleController {
  async handle(req: Request, res: Response) {
    const {permissionId, roleId} = req.body
    const removePermissionRoleService = new RemovePermissionRoleService()
    const RoleUpdate = removePermissionRoleService.execute({
      permissionId,
      roleId
    })
    return res.json(RoleUpdate)
  }
} 

export { RemovePermissionRoleController };