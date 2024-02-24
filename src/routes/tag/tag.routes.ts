import { Router } from "express";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { CreateTagController } from "../../controllers/Tag/CreateTagController";

export const TagRoutes = Router()

TagRoutes.post('/', isAuthenticated, new CreateTagController().handle)