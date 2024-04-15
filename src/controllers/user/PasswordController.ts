import { Request, Response } from "express";
import { PasswordService } from "../../services/user/PasswordService";
import { sendCode } from "../../services/user/ForgotPasswordService";

class PasswordController {
  async handle(req: Request, res: Response) {
    const { password, get_codePassword } = req.body
    const codeSend = sendCode
    const user_id  = req.params.id
    const passwordService = new PasswordService()
    const newPassword = await passwordService.execute(req, codeSend,{ password, user_id, get_codePassword  })
    return res.json(newPassword)
  }
}

export { PasswordController };