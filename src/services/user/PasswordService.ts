import { Request } from "express";
import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { ForgotPasswordService } from "./ForgotPasswordService";

interface IPasswordService {
  password: string;
  user_id: string;
  get_codePassword: string;
}

class PasswordService {
  async execute(req: Request, { password, user_id, get_codePassword }: IPasswordService) {
    const forgotPasswordService = ForgotPasswordService.getInstance(); // Use getInstance em vez de new
    const sendCode = forgotPasswordService.getSendCode(); // Use o método getter para obter sendCode

    console.log("usuario enviou: -", get_codePassword)
    console.log("sistema enviou: -", sendCode)
    try {
      if(!user_id || !password) throw new Error('Missing user_id and password')
      const user = await prismaClient.user.findFirst({ where: { id: user_id } })
      if(!user) throw new Error('User not found')  
      if(!get_codePassword) throw new Error('Missing code')
      if(sendCode == null) throw new Error('Time expired to send code')
      if(get_codePassword !== sendCode) throw new Error('Invalid code') // Altere 'codeSend' para 'sendCode'
      
      const passwordHash = await hash(password, 8);
      const newPassword = await prismaClient.user.update({ where: { id: user_id }, data: { password: passwordHash }, select: { id: true, username: true, email: true } })
      return newPassword
    } catch (error) {
      throw new Error('Failed to: ' + error.message);
    }
  }
}

export { PasswordService };