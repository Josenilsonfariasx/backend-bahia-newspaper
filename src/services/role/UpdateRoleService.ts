import prismaClient from "../../prisma";

interface RoleRequest {
  RoleId: string;
  name: string;
  description: string;
}
class UpdateRoleService {
  async execute({RoleId, name, description}: RoleRequest) {
    try {
      if(!RoleId){
        throw new Error('Id is required to identify the Role')
      }
      const RoleExist = await prismaClient.role.findFirst({
        where:{
          id: RoleId
        }
      })
      if(!RoleExist){
        throw new Error('Role not found')
      }
      if(!name && !description){
        throw new Error('Fields are required')
      }
      const RoleUpdated = await prismaClient.role.update({
        where:{
          id: RoleId
        }, data:{
          name: name !== '' || name !== null ? name : RoleExist.name,
          description: description !== '' || description !== null? description : RoleExist.description
        }, select:{
          id: true,
          name: true,
          description: true
        }
      })
      return RoleUpdated
    } catch (error) {
      throw new Error('Failed to update role: '+error.message)
    }
  }
}
export { UpdateRoleService };