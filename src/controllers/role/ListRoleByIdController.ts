import { Request, Response } from "express";
import { ListRoleByIdService } from "../../services/role/ListRoleByIdService";

class ListRoleByIdController {
  async handle(req: Request, res: Response) {
    const RoleId = req.params.id as string
    const listRoleByIdService = new ListRoleByIdService()
    const roles = await listRoleByIdService.execute({RoleId})
    return res.json(roles)
  }
}

export { ListRoleByIdController };