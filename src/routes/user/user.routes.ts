import { Router } from "express";
import { CreateUserController } from "../../controllers/user/CreateUserController";
import { ListUserController } from "../../controllers/user/ListUserController";
import { ListUserByIdController } from "../../controllers/user/ListUserByIdController";

export const usersRoutes: Router = Router();

usersRoutes.post('/', new CreateUserController().handle)
usersRoutes.get('/', new ListUserController().handle)
usersRoutes.get('/:id', new ListUserByIdController().handle)