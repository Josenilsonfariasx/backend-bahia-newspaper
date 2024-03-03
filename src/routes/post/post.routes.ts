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
import { CreatePostScheduleController } from "../../controllers/post/CreatePostScheduleController";
import { CancelAppointmentPostController } from "../../controllers/post/CancelAppointmentPostController";
import { InsertCategoryInPostController } from "../../controllers/post/InsertCategoryInPostController";
import { RemoveCategoryFromPostController } from "../../controllers/post/RemoveCategoryFromPostController";


export const postRoutes = Router()


// post
const upload = multer(uploadConfig);
postRoutes.post('/', isAuthenticated, upload.array('files', 10), isAuthenticated, new CreatePostController().handle)
postRoutes.post('/schedule', isAuthenticated, upload.array('files', 10), isAuthenticated, new CreatePostScheduleController().handle)
postRoutes.post('/category/:id', isAuthenticated, new InsertCategoryInPostController().handle)

// get
postRoutes.get('/', isAuthenticated, new ListAllPostController().handle)
postRoutes.get('/:id', isAuthenticated, new GetPostByIdController().handle)

// put
postRoutes.put('/:id', isAuthenticated, new UpdatePostController().handle)
postRoutes.put('/status/:id', isAuthenticated, new UpdateStatusPostController().handle)
postRoutes.put('/schedule/cancel/:id', isAuthenticated, new CancelAppointmentPostController().handle)

// delete
postRoutes.delete('/:id', isAuthenticated, new DeletePostController().handle)
postRoutes.delete('/image/delete/:id', isAuthenticated, new DeleteImageFromPostController().handle)
postRoutes.delete('/category/delete/:id', isAuthenticated, new RemoveCategoryFromPostController().handle)