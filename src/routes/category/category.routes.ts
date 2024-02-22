import { Router } from "express";
import { CreateCategoryController } from "../../controllers/category/CreateCategoryController";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { ListCategoryController } from "../../controllers/category/ListCategoryController";
import { UpdateCategoryController } from "../../controllers/category/UpdateCategoryController";
import { DeleteCategoryController } from "../../controllers/category/DeleteCategoryController";

export const categoryRoutes = Router();

// post
categoryRoutes.post('/', isAuthenticated, new CreateCategoryController().handle)
// get
categoryRoutes.get('/', isAuthenticated, new ListCategoryController().handle)
// put
categoryRoutes.put('/', isAuthenticated, new UpdateCategoryController().handle)
// delete
categoryRoutes.delete('/', isAuthenticated, new DeleteCategoryController().handle)