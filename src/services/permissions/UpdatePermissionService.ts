import prismaClient from "../../prisma";

interface PermissionRequest {
  PermissionId : string;
  name: string;
  description: string;
}
class UpdatePermissionService {
  async execute({PermissionId, name, description}: PermissionRequest) {
    try {
      if(!PermissionId){
        throw new Error('Id is required to identify the permission')
      }
      const permissionExist = await prismaClient.permission.findFirst({
        where:{
          id: PermissionId
        }
      })
      if(!permissionExist){
        throw new Error('Permission not found')
      }
      if(!name && !description){
        throw new Error('All fields are required')
      }
      const PermissionUpdated = await prismaClient.permission.update({
        where:{
          id: PermissionId
        }, data:{
          name: name !== '' || name !== null ? name : permissionExist.name,
          description: description !== '' || description !== null? description : permissionExist.description
        }, select:{
          id: true,
          name: true,
          description: true
        }
      })
      return PermissionUpdated
    } catch (error) {
      throw new Error('Failed to update permission: '+error.message)
    }
  }
}
export { UpdatePermissionService };