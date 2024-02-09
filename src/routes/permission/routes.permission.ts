import { Router } from "express";
import { CreatePermissionController } from "../../controllers/permissions/CreatePermissionController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { InsertPermissionForUserController } from "../../controllers/permissions/InsertPermissionForUserController";
import { InsertPermissionForRoleController } from "../../controllers/permissions/InsertPermissionForRoleController";
import { RemovePermissionUserController } from "../../controllers/permissions/RemovePermissionUserController";

export const permissionRoutes: Router = Router()

permissionRoutes.post('/', isAuthenticated, new CreatePermissionController().handle)
permissionRoutes.delete('/user', isAuthenticated, new RemovePermissionUserController().handle)
permissionRoutes.post('/user', isAuthenticated, new InsertPermissionForUserController().handle)
permissionRoutes.post('/role', isAuthenticated, new InsertPermissionForRoleController().handle)