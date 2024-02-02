import { Router } from "express";
import { CreateUserController } from "../../controllers/user/CreateUserController";

export const usersRoutes: Router = Router();

usersRoutes.post('/', new CreateUserController().handle)