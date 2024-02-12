import prismaClient from "../../prisma";

interface RoleRequest{
  RoleId: string;
  UserId: string;
}
class RemoveRolefromUserService {
  async execute({RoleId, UserId}: RoleRequest) {
    try {
      if(!RoleId) {
        throw new Error('Id is required to identify role')
      }
      const userExist = await prismaClient.user.findFirst({where:{id: UserId}})
      if(!userExist){
        throw new Error('User Not Found')
      }
      const roleExist = await prismaClient.role.findFirst({where:{id: RoleId}})
      if(!roleExist){
        throw new Error('Role Not Found')
      }

      const roleUpdated = await prismaClient.role.update({
        where:{id: RoleId},
        data:{
          users:{
            disconnect: {
              id: UserId
            }
          }
        }
      })
      return roleUpdated
    } catch (error) {
      throw new Error('Failed remove role from user: '+error.messsage)
    }
  }
}
export { RemoveRolefromUserService };