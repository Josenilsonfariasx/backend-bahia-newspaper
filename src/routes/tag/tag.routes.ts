import { Router } from "express";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { CreateTagController } from "../../controllers/tag/CreateTagController";
import { ListTagsController } from "../../controllers/tag/ListTagsController";

export const TagRoutes = Router()

// post
TagRoutes.post('/', isAuthenticated, new CreateTagController().handle)

// get
TagRoutes.get('/', isAuthenticated, new ListTagsController().handle)