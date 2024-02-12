import { Request, Response } from "express";
import { UpdateRoleService } from "../../services/role/UpdateRoleService";

class UpdateRoleController {
  async handle(req: Request, res: Response) {
    const {RoleId, name, description} = req.body

    const RoleUpdateService = new UpdateRoleService()
    const RoleUpdated = await RoleUpdateService.execute({
      name, description, RoleId
    })
    return res.json(RoleUpdated)
  }
}

export { UpdateRoleController };