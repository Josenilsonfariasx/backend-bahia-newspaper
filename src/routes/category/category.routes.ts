import { Router } from "express";
import { CreateCategoryController } from "../../controllers/category/CreateCategoryController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

export const categoryRoutes = Router();

// post
categoryRoutes.post('/', isAuthenticated, new CreateCategoryController().handle)