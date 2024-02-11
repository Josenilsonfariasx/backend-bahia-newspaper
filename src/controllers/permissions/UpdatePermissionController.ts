import { Request, Response } from "express";
import { UpdatePermissionService } from "../../services/permissions/UpdatePermissionService";

class UpdatePermissionController {
  async handle(req: Request, res: Response) {
    const {PermissionId, name, description} = req.body

    const updatePermissionService = new UpdatePermissionService()
    const PermissionUpdated = await updatePermissionService.execute({
      name, description, PermissionId
    })
    return res.json(PermissionUpdated)
  }
}

export { UpdatePermissionController };