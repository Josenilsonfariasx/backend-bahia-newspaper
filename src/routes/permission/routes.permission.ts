import { Router } from "express";
import { CreatePermissionController } from "../../controllers/permissions/CreatePermissionController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

export const permissionRoutes: Router = Router()

permissionRoutes.post('/', isAuthenticated, new CreatePermissionController().handle)