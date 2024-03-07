import {Request, Response, Router} from "express";
import { usersRoutes } from "./user/user.routes";
import { roleRoutes } from "./role/role.routes";
import { permissionRoutes } from "./permission/routes.permission";
import { categoryRoutes } from "./category/category.routes";
import { TagRoutes } from "./tag/tag.routes";
import { postRoutes } from "./post/post.routes";
export const routes: Router = Router();

routes.get('/on', (req:Request, res:Response)=> {
  return res.json({ on : true })
})

routes.use('/user', usersRoutes)
routes.use('/role', roleRoutes)
routes.use('/permission', permissionRoutes)
routes.use('/category', categoryRoutes)
routes.use('/tag', TagRoutes)
routes.use('/post', postRoutes)