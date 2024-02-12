import prismaClient from "../../prisma";

interface RoleRequest {
  name: string;
  description: string;
}

class CreateRoleService {
  async execute({name, description}:RoleRequest) {
    try {
      if(!name || !description){
        throw new Error('All fields are required')
      }
      const roleAlreadyExist = await prismaClient.role.findFirst({
        where:{
          name: name
        }
      })
      if(roleAlreadyExist){
        throw new Error('Role already exists')
      }
      const role = await prismaClient.role.create({
        data: {
          name: name,
          description: description
        }, select: {
          id: true,
          name: true,
          description: true,
          users: true, 
          permissions: true
        }
      })
      return role
    } catch (error) {
      throw new Error('Failed to create role: '+ error.message)
    }
  }
}
export { CreateRoleService };