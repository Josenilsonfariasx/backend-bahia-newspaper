import { Request } from "express";
import prismaClient from "../../prisma";
import { get } from "http";
import { hash } from "bcryptjs";
import { sendCode } from "./ForgotPasswordService";
interface IPasswordService {
  password: string;
  user_id: string;
  get_codePassword: string;
}

class PasswordService {
  async execute(req: Request, codeSend: string, { password, user_id, get_codePassword }: IPasswordService) {
    console.log("usuario enviou: -", get_codePassword)
    console.log("sistema enviou: -", codeSend)
    try {
      if(!user_id || !password) throw new Error('Missing user_id and password')
      const user = await prismaClient.user.findFirst({ where: { id: user_id } })
      if(!user) throw new Error('User not found')  
      if(!get_codePassword) throw new Error('Missing code')
      if(sendCode == null) throw new Error('Time expired to send code')
      if(get_codePassword !== codeSend) throw new Error('Invalid code')
      
        const passwordHash = await hash(password, 8);
        const newPassword = await prismaClient.user.update({ where: { id: user_id }, data: { password: passwordHash }, select: { id: true, username: true, email: true } })
        return newPassword
      } catch (error) {
        throw new Error('Failed to: ' + error.message);
      }
  }
}
export { PasswordService };