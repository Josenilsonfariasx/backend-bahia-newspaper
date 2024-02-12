import prismaClient from "../../prisma";

interface RoleRequest {
  RoleId: string;
}
class DeleteRoleService {
  async execute({RoleId}: RoleRequest) {
    console.log(RoleId)
    try {
      if(!RoleId){
        throw new Error('Id is required to identify the role')
      }
      const deleteRole = await prismaClient.role.delete({
        where:{
          id: RoleId
        }
      })
      return deleteRole
    } catch (error) {
      throw new Error('Failed to delete Role: '+error.message)
    }
  }
}
export { DeleteRoleService };