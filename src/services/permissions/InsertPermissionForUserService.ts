import prismaClient from "../../prisma";

interface PermissionRequest {
  userId: string;
  permissionId: string;
}

class InsertPermissionForUserService {
  async execute({permissionId, userId}:PermissionRequest) {
    try {
      if(!permissionId || !userId) {
        throw new Error('All Fields is Required')
      }
      const user = prismaClient.user.findFirst({
        where:{
          id: userId
        }, include: {
          permissions:true
        }
      })
      if(!user){
        throw new Error('User Not Found')
      }
      const UserWithPermission = prismaClient.user.update({
        where:{
          id: userId
        },
        data:{
          permissions:{
            connect:{
              id: permissionId
            }
          }
        }
      })
      return UserWithPermission
    }catch (error) {
      throw new Error('Failed to add permission to user: '+error.message)
    }
  }
}
export { InsertPermissionForUserService };