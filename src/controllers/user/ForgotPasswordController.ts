import { Request, Response } from "express";
import { ForgotPasswordService } from "../../services/user/ForgotPasswordService";

class ForgotPasswordController {
  async handle(req: Request, res: Response) {
    const { email } = req.body
    const forgotPasswordService = ForgotPasswordService.getInstance(); // Use getInstance em vez de new
    const fogot = await forgotPasswordService.execute(req, { email })
    return res.json(fogot)
  }
}

export { ForgotPasswordController };