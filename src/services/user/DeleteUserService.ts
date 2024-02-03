import prismaClient from "../../prisma"

interface UserRequest{
  UserId : string
}

class DeleteUserService {
  async execute({UserId}:UserRequest) {
    try {
      if(!UserId){
        throw new Error('Id is required for delete user')
      }
      const user =  await prismaClient.user.delete({
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
      throw new Error('Faile to delete user: '+ error.message)
    }
  }
  }
export { DeleteUserService };