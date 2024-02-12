import prismaClient from "../../prisma";

interface RoleRequest {
  RoleId: string;
  UserId: string;
}
class InsertRoleForUserService {
  async execute({RoleId, UserId}: RoleRequest) {
    try {
      if(!RoleId){
        throw new Error('Id from role is required to identify role and user ')
      }
      const userExist = await prismaClient.user.findFirst({where:{id: UserId}})
      if(!userExist){
        throw new Error('User Not Found')
      }
      const RoleExist = await prismaClient.role.findFirst({where:{id: RoleId}})
      if(!RoleExist){
        throw new Error('Role Not Found')
      }
      const UserUpdated = await prismaClient.role.update({
        where: {
          id: RoleId
        }, data:{
          users:{
            connect: {
              id: UserId
            }
          }
        }, select:{
          id: true,
          name: true,
          users:{
            select:{
              id: true,
              email: true,
              username: true
            }
          }
        }
      })
      return UserUpdated
    } catch (error) {
      throw new Error('Failed to insert role from user: '+error.message)
    }
  }
}
export { InsertRoleForUserService };