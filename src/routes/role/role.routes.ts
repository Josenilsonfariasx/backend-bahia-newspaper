import { Router } from "express";
import { CreateRoleController } from "../../controllers/role/CreateRoleController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

export const roleRoutes: Router = Router()

roleRoutes.post('/', isAuthenticated, new CreateRoleController().handle)