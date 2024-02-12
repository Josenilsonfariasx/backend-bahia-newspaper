import { Router } from "express";
import { CreateRoleController } from "../../controllers/role/CreateRoleController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { ListRoleController } from "../../controllers/role/ListRoleController";

export const roleRoutes: Router = Router()

// post
roleRoutes.post('/', isAuthenticated, new CreateRoleController().handle)

// get
roleRoutes.get('/', isAuthenticated, new ListRoleController().handle)

// delete


// put
