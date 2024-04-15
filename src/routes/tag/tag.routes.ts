import { Router } from "express";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { CreateTagController } from "../../controllers/tag/CreateTagController";
import { ListTagsController } from "../../controllers/tag/ListTagsController";
import { UpdateTagController } from "../../controllers/tag/UpdateTagController";
import { DeleteTagController } from "../../controllers/tag/DeleteTagController";

export const TagRoutes = Router()

// post
TagRoutes.post('/', isAuthenticated, new CreateTagController().handle)

// get
TagRoutes.get('/', new ListTagsController().handle)

// put
TagRoutes.put('/', isAuthenticated, new UpdateTagController().handle)

// delete
TagRoutes.delete('/:id', isAuthenticated, new DeleteTagController().handle)