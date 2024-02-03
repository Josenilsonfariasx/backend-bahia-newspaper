import { Router } from "express";
import { CreatePermissionController } from "../../controllers/permissions/CreatePermissionController";

export const permissionRoutes: Router = Router()

permissionRoutes.post('/', new CreatePermissionController().handle)