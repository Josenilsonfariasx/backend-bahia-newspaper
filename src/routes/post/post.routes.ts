import { Router } from "express";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { CreatePostController } from "../../controllers/post/CreatePostController";
import multer from "multer";
import uploadConfig from '../../configs/multerConfig';
import { ListAllPostController } from "../../controllers/post/ListAllPostController";
export const postRoutes = Router()

// post
const upload = multer(uploadConfig);
postRoutes.post('/',  upload.array('files', 10), isAuthenticated, new CreatePostController().handle)

// get
postRoutes.get('/', new ListAllPostController().handle)