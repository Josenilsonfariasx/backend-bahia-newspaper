import { Router } from "express";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { CreatePostController } from "../../controllers/post/CreatePostController";
import multer from "multer";
import uploadConfig from '../../configs/multerConfig';
import { ListAllPostController } from "../../controllers/post/ListAllPostController";
import { UpdatePostController } from "../../controllers/post/UpdatePostController";
import { DeletePostController } from "../../controllers/post/DeletePostController";
import { GetPostByIdController } from "../../controllers/post/GetPostByIdController";
import { UpdateStatusPostController } from "../../controllers/post/UpdateStatusPostController";
import { DeleteImageFromPostController } from "../../controllers/post/DeleteImageFromPostController";


export const postRoutes = Router()


// post
const upload = multer(uploadConfig);
postRoutes.post('/', isAuthenticated, upload.array('files', 10), isAuthenticated, new CreatePostController().handle)

// get
postRoutes.get('/', isAuthenticated, new ListAllPostController().handle)
postRoutes.get('/:id', isAuthenticated, new GetPostByIdController().handle)

// put
postRoutes.put('/:id', isAuthenticated, new UpdatePostController().handle)
postRoutes.put('/status/:id', isAuthenticated, new UpdateStatusPostController().handle)

// delete
postRoutes.delete('/:id', isAuthenticated, new DeletePostController().handle)
postRoutes.delete('/image/delete/:id', isAuthenticated, new DeleteImageFromPostController().handle)