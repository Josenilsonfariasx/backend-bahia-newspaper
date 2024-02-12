import { Request, Response } from "express";
import { DeleteRoleService } from "../../services/role/DeleteRoleService";

class DeleteRoleController {
  async handle(req: Request, res: Response) {
    const RoleId = req.params.id as string
    const deleteRoleService = new DeleteRoleService()
    const DeletedRole = await deleteRoleService.execute({RoleId})
    return res.json(DeletedRole)
  }
}

export { DeleteRoleController };