import {Request, Response, Router} from "express";
import { usersRoutes } from "./user/user.routes";
import { roleRoutes } from "./role/role.routes";
import { permissionRoutes } from "./permission/routes.permission";
export const routes: Router = Router();

routes.get('/on', (req:Request, res:Response)=> {
  return res.json({ on : true })
})

routes.use('/user', usersRoutes)
routes.use('/role', roleRoutes)
routes.use('/permission', permissionRoutes)