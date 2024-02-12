import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const UserId = req.params.id as string
    const { username, email} = req.body;

    if (!username && !email) {
      return res.status(400).json({ message: "You must provide at least one field to update" });
    }

    if (username === "" || email === "") {
      return res.status(400).json({ message: "Fields cannot be empty" });
    }
    const updateUserService = new UpdateUserService();
    const userUpdated = await updateUserService.execute({
      id: UserId,
      email: email,
      username: username,
    });

    return res.json(userUpdated);
  }
}

export { UpdateUserController };