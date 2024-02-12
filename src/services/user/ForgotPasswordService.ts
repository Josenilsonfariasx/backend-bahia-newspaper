import { send } from "../../utils/send";
import { html } from "../../utils/bodyHtmlForEmailSend";
import { generateCode } from "../../utils/code";
import prismaClient from "../../prisma";

interface ForgotPasswordRequest {
  email: string;
}

class ForgotPasswordService {
  async execute({ email }: ForgotPasswordRequest) {
    const code = generateCode()
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
      send(email, 'Envio de email', html(code))
      return {code:code}
    } catch (error) {
      throw new Error('Failed to: ' + error.message);
    }
  }
}

export { ForgotPasswordService };
