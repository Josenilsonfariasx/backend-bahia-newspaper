import prismaClient from "../../prisma";

interface UserRequest{
  UserId : string
}

class ListUserByIdService {
  async execute({UserId}:UserRequest) {
    try {
      if(!UserId){
        throw new Error('Id is required for get user by id')
      }
      const user =  await prismaClient.user.findFirst({
        where:{
          id: UserId
        }, select: {
          id: true,
          username: true,
          email: true, 
          permissions: true,
          roleId:true
        }  
      })
      return user
    } catch (error) {
      throw new Error('Faile to list user by id: '+ error.message)
    }
  }
}
export { ListUserByIdService };