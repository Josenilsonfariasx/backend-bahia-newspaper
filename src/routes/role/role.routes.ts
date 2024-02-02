import { Router } from "express";
import { CreateRoleController } from "../../controllers/role/CreateRoleController";

export const roleRoutes: Router = Router()

roleRoutes.post('/', new CreateRoleController().handle)