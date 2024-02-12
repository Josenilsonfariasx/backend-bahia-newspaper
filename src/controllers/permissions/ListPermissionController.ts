import { Request, Response } from "express";
import { ListPermissionService } from "../../services/permissions/ListPermissionService";

class ListPermissionController {
  async handle(req: Request, res: Response) {
  const listPermissionService = new ListPermissionService()
  const list = await listPermissionService.execute()
  return res.json(list)
  }
}

export { ListPermissionController };