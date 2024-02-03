import prismaClient from "../../prisma";

interface PermissionRequest {
  name: string;
  description: string;
}

class CreatePermissionService {
  async execute({name, description}:PermissionRequest) {
    try {
      if(!name || !description){
        throw new Error('All fields are required')
      }
      const permissionAlreadyExist = await prismaClient.permission.findFirst({
        where:{
          name: name
        }
      })
      if (permissionAlreadyExist){
        throw new Error('Permisson already exists')
      }

      const permission = await prismaClient.permission.create({
        data:{
          name: name,
          description: description
        }, select:{
          id:true,
          name:true,
          description:true,
          users:true,
          roles:true
        }
      })
      return permission
    } catch (error) {
      throw new Error('Failed to create permission: '+ error.message )
    }
  }
}
export { CreatePermissionService };