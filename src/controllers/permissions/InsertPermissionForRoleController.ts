import { Request, Response } from "express";
import { InsertPermissionForRoleService } from "../../services/permissions/InsertPermissionForRoleService";

class InsertPermissionForRoleController {
  async handle(req: Request, res: Response) {
    const {permissionId, roleId} = req.body
    const insertPermissionForRoleService = new InsertPermissionForRoleService()
    const permissionInsert = await insertPermissionForRoleService.execute({
      permissionId, 
      roleId
    })
    return res.json(permissionInsert)
  }
}

export { InsertPermissionForRoleController };