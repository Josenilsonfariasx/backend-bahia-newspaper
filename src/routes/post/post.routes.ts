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


export const postRoutes = Router()


// post
const upload = multer(uploadConfig);
postRoutes.post('/',  upload.array('files', 10), isAuthenticated, new CreatePostController().handle)

// get
postRoutes.get('/', new ListAllPostController().handle)
postRoutes.get('/:id', new GetPostByIdController().handle)

// put
postRoutes.put('/:id', new UpdatePostController().handle)
postRoutes.put('/status/:id', new UpdateStatusPostController().handle)

// delete
postRoutes.delete('/:id', new DeletePostController().handle)