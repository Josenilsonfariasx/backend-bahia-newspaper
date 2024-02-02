import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const {username, email, password, roleId} = req.body
    const createUserService = new CreateUserService()
    const user = await createUserService.execute({
      email,
      password,
      roleId,
      username,
    })
    return res.json(user)
  }
}

export { CreateUserController }