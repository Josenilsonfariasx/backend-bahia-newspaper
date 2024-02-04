import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest{
    email: string;
    password: string;
}


class AuthUserService{
  async execute({email, password}: AuthRequest){

    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(!user){
      throw new Error('User/Password not found')
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error('User/Password incorrect')
    }
    // after full verification we generate jwt

    const token = sign({
        username: user.username,
        email: user.email
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '10d'
        }
    )
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        roleId: user.roleId,
        token: token
    }
  }
}

export {AuthUserService}