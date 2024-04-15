import { Router } from "express";
import { CreateUserController } from "../../controllers/user/CreateUserController";
import { ListUserController } from "../../controllers/user/ListUserController";
import { ListUserByIdController } from "../../controllers/user/ListUserByIdController";
import { DeleteUserController } from "../../controllers/user/DeleteUserController";
import { UpdateUserController } from "../../controllers/user/UpdateUserController";
import { AuthUserController } from "../../controllers/user/AuthUserController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { ForgotPasswordController } from "../../controllers/user/ForgotPasswordController";
import { PasswordController } from "../../controllers/user/PasswordController";

export const usersRoutes: Router = Router();

usersRoutes.post('/', new CreateUserController().handle)
usersRoutes.get('/', isAuthenticated, new ListUserController().handle)
usersRoutes.get('/:id', isAuthenticated, new ListUserByIdController().handle)
usersRoutes.delete('/:id', isAuthenticated, new DeleteUserController().handle)
usersRoutes.put('/:id', isAuthenticated,new UpdateUserController().handle)


usersRoutes.post('/password', new ForgotPasswordController().handle)
usersRoutes.post('/password/new/:id', new PasswordController().handle)
usersRoutes.post('/session', new AuthUserController().handle)