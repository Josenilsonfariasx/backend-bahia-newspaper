import { Router } from "express";
import { CreateUserController } from "../../controllers/user/CreateUserController";
import { ListUserController } from "../../controllers/user/ListUserController";
import { ListUserByIdController } from "../../controllers/user/ListUserByIdController";
import { DeleteUserController } from "../../controllers/user/DeleteUserController";

export const usersRoutes: Router = Router();

usersRoutes.post('/', new CreateUserController().handle)
usersRoutes.get('/', new ListUserController().handle)
usersRoutes.get('/:id', new ListUserByIdController().handle)
usersRoutes.delete('/:id', new DeleteUserController().handle)