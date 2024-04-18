import { Request, Response } from "express";
import { PasswordService } from "../../services/user/PasswordService";
import { ForgotPasswordService } from "../../services/user/ForgotPasswordService";

class PasswordController {
  async handle(req: Request, res: Response) {
    const { password, get_codePassword } = req.body
    const user_id  = req.params.id

    const forgotPasswordService = ForgotPasswordService.getInstance(); // Use getInstance em vez de new
    const codeSend = forgotPasswordService.getSendCode();

    const passwordService = new PasswordService()
    const newPassword = await passwordService.execute(req,{ password, user_id, get_codePassword }) // Passe apenas os argumentos necessários
    return res.json(newPassword)
  }
}

export { PasswordController };