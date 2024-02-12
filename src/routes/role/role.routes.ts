import { Router } from "express";
import { CreateRoleController } from "../../controllers/role/CreateRoleController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { ListRoleController } from "../../controllers/role/ListRoleController";
import { DeleteRoleController } from "../../controllers/role/DeleteRoleController";
import { UpdateRoleController } from "../../controllers/role/UpdateRoleController";
import { InsertRoleForUserController } from "../../controllers/role/InsertRoleForUserController";
import { ListRoleByIdController } from "../../controllers/role/ListRoleByIdController";

export const roleRoutes: Router = Router()

// post
roleRoutes.post('/', isAuthenticated, new CreateRoleController().handle)
roleRoutes.post('/user', isAuthenticated, new InsertRoleForUserController().handle)

// get
roleRoutes.get('/', isAuthenticated, new ListRoleController().handle)
roleRoutes.get('/:id', isAuthenticated, new ListRoleByIdController().handle)

// delete
roleRoutes.delete('/:id', isAuthenticated, new DeleteRoleController().handle)


// put
roleRoutes.put('/', isAuthenticated, new UpdateRoleController().handle)