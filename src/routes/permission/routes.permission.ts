import { Router } from "express";
import { CreatePermissionController } from "../../controllers/permissions/CreatePermissionController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { InsertPermissionForUserController } from "../../controllers/permissions/InsertPermissionForUserController";
import { RemovePermissionUserController } from "../../controllers/permissions/RemovePermissionUserController";

export const permissionRoutes: Router = Router()

permissionRoutes.post('/', isAuthenticated, new CreatePermissionController().handle)
permissionRoutes.post('/user', isAuthenticated, new InsertPermissionForUserController().handle)
permissionRoutes.delete('/user', isAuthenticated, new RemovePermissionUserController().handle)