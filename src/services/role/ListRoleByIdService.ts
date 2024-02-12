import prismaClient from "../../prisma";

interface RoleRequest {
  RoleId: string;
}
class ListRoleByIdService {
  async execute({RoleId}: RoleRequest) {
    try {
      if(!RoleId){
        throw new Error('Id from role is required to identify role')
      }
      const role = await prismaClient.role.findFirst({
        where:{
          id:RoleId
        }, select: {
          id: true,
          name: true,
          description: true,
          _count: true,
          permissions:{
            select:{
              id: true,
              name: true,
            }
          }, 
          users:{
            select: {
              id: true,
              email: true,
            }
          },
        }
      })
      return role
    } catch (error) {
      throw new Error('Failed list role by id: '+error.message)
    }
  }
}
export { ListRoleByIdService };