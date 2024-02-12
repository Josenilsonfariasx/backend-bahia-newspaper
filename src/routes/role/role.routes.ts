import { Router } from "express";
import { CreateRoleController } from "../../controllers/role/CreateRoleController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { ListRoleController } from "../../controllers/role/ListRoleController";
import { DeleteRoleController } from "../../controllers/role/DeleteRoleController";
import { UpdateRoleController } from "../../controllers/role/UpdateRoleController";

export const roleRoutes: Router = Router()

// post
roleRoutes.post('/', isAuthenticated, new CreateRoleController().handle)

// get
roleRoutes.get('/', isAuthenticated, new ListRoleController().handle)

// delete
roleRoutes.delete('/:id', isAuthenticated, new DeleteRoleController().handle)


// put
roleRoutes.put('/', isAuthenticated, new UpdateRoleController().handle)