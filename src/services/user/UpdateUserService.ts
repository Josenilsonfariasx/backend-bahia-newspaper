import prismaClient from "../../prisma";

interface UserRequest{
  id: string;
  username: string;
  email: string;
}

class UpdateUserService {
  async execute({id, username, email}:UserRequest) {
    try {
      if(!id){
        throw new Error('Need to specify user id')
      }
      const userAlreadyExist = await prismaClient.user.findFirst({
        where: {
          id:id
        }
      })
      if(!userAlreadyExist){
        throw new Error('User not found')
      }

      const updateUser = await prismaClient.user.update({
        where:{id:id},
        data:{
          username: username !== undefined || username !== '' ? username : userAlreadyExist.username,
          email: email !== undefined || email !== '' ? email : userAlreadyExist.email
        }, select:{
          id: true,
          username: true,
          email: true
        }
      })
      return updateUser
    } catch (error) {
      throw new Error('Failed to update user: '+error.message)
    }
  }
}
export { UpdateUserService };