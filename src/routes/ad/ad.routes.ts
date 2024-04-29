import { Router } from "express";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { CreateAdControler } from "../../controllers/ad/CreateAdControler";
import uploadConfig from '../../configs/multerConfig';
import multer from "multer";
import { ListAllAdControler } from "../../controllers/ad/ListAllAdControler";
import { UpdateAdControler } from "../../controllers/ad/UpdateAdControler";
import { DeleteAdControler } from "../../controllers/ad/DeleteAdControler";

export const adRoutes = Router();
const upload = multer(uploadConfig);
// post
adRoutes.post("/new",isAuthenticated, upload.array('files', 5), new CreateAdControler().handle)
// get
adRoutes.get("/", new ListAllAdControler().handle)
// put
adRoutes.put("/update/:id",isAuthenticated, upload.array('files',5), new UpdateAdControler().handle)
// delete
adRoutes.delete("/delete/:id",isAuthenticated, new DeleteAdControler().handle)