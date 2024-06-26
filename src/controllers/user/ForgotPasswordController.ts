import { Request, Response } from "express";
import { ForgotPasswordService } from "../../services/user/ForgotPasswordService";

class ForgotPasswordController {
  async handle(req: Request, res: Response) {
    const { email } = req.body
    const forgotPasswordService = new ForgotPasswordService()
    const fogot = await forgotPasswordService.execute({
      email: email
    })
    return res.json(fogot)
  }
}

export { ForgotPasswordController };