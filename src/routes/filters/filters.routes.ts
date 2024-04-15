import { Router } from "express";
import { ListPostByOrderCountViewsController } from "../../controllers/filters/ListPostByOrderCountViewsController";

export const filtersRoutes = Router();

// post
// get
filtersRoutes.get('/post/views', new ListPostByOrderCountViewsController().handle)
// put
// delete