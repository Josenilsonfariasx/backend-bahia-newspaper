import { send } from "../../utils/send";
import { html } from "../../utils/bodyHtmlForEmailSend";
import { generateCode } from "../../utils/code";
import prismaClient from "../../prisma";
import { Request } from "express";

interface ForgotPasswordRequest {
  email: string;
}

let code = generateCode()
export let sendCode = code
// console.log(code)
class ForgotPasswordService {
  async execute(req:Request, { email }: ForgotPasswordRequest) {
    req.code
    try {
      if (!email) {
        throw new Error('Email is required');
      }
      const userAlreadyExist = await prismaClient.user.findFirst({
        where: {
          email:email
        }
      })
      if(!userAlreadyExist){
        throw new Error('Failed to find user')
      }
      send(email, 'Recuperação de Senha Jornal Da Bahia', html(code))
      // Invalidar o código após 5 minutos
      setTimeout(() => {
        sendCode = null;
      }, 5 * 60 * 1000);
      return {
        message: 'Code sent to email',
        userId:userAlreadyExist.id
      }
    } catch (error) {
      throw new Error('Failed to: ' + error.message);
    }
  }
}

export { ForgotPasswordService };
