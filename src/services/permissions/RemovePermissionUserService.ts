import prismaClient from "../../prisma";

interface PermissionRequest {
  permissionId: string;
  userId: string;
}

class RemovePermissionUserService {
  async execute({permissionId, userId}:PermissionRequest) {
    try {      
      if(!permissionId || !userId) {
        throw new Error('All Fields is Required')
      }
      const user =  prismaClient.user.findFirst({
        where:{
          id:userId
        },
        include: {
          permissions: true
        }
      })
      if(!user){
        throw new Error('User Not Found');
      }
      const updatedUser = await prismaClient.user.update({
        where: {
          id: userId
        },
        data: {
          permissions: {
            disconnect: {
              id: permissionId
            }
          }
        },
        include: {
          permissions: true
        }
      });
      return updatedUser;
    } catch (error) {
      throw new Error('Failed to Remove Permission from User: '+error.message);
    }
  }
}
export { RemovePermissionUserService };