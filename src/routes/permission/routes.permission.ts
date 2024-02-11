import { Router } from "express";
import { CreatePermissionController } from "../../controllers/permissions/CreatePermissionController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { InsertPermissionForUserController } from "../../controllers/permissions/InsertPermissionForUserController";
import { InsertPermissionForRoleController } from "../../controllers/permissions/InsertPermissionForRoleController";
import { RemovePermissionUserController } from "../../controllers/permissions/RemovePermissionUserController";
import { RemovePermissionRoleController } from "../../controllers/permissions/RemovePermissionRoleController";
import { ListPermissionController } from "../../controllers/permissions/ListPermissionController";
import { UpdatePermissionController } from "../../controllers/permissions/UpdatePermissionController";

export const permissionRoutes: Router = Router()
// get
permissionRoutes.get('/list', isAuthenticated, new ListPermissionController().handle)

// post
permissionRoutes.post('/', isAuthenticated, new CreatePermissionController().handle)
permissionRoutes.post('/role', isAuthenticated, new InsertPermissionForRoleController().handle)
permissionRoutes.post('/user', isAuthenticated, new InsertPermissionForUserController().handle)

// delete
permissionRoutes.delete('/user', isAuthenticated, new RemovePermissionUserController().handle)
permissionRoutes.delete('/role', isAuthenticated, new RemovePermissionRoleController().handle)

// put
permissionRoutes.put('/update', isAuthenticated, new UpdatePermissionController().handle)