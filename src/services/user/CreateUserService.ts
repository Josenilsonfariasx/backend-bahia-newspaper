import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
  username: string;
  email: string;
  password: string;
  roleId?: string;
}
class CreateUserService {
  async execute({username, email, password}:UserRequest) {
    try {
      if(!username || !email || !password){
        throw new Error ('All fields are required')
      }

      const userAlreadyExist = await prismaClient.user.findFirst({
        where: {
          email:email
        }
      })

      if(userAlreadyExist){
        throw new Error("Email already exists");
      }
      const passwordHash = await hash(password, 8);

      const User = await prismaClient.user.create({
        data:{
          username: username,
          email: email,
          password: passwordHash,
        }, 
        select: {
          id:true,
          username:true,
          email:true,
          role:true,
          permissions:true
        }
      })
      return User
    } catch (error) {
      throw new Error("Failed to create user: " + error.message);
    }
  }
}
export { CreateUserService };