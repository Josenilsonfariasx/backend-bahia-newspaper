import prismaClient from "../../prisma";

interface PermissionRequest {
  permissionId: string;
  roleId: string;
}

class InsertPermissionForRoleService {
  async execute({ permissionId, roleId }: PermissionRequest) {
    try {
      if (!permissionId || !roleId) {
        throw new Error('All fields are required');
      }

      const role = await prismaClient.role.findFirst({
        where: {
          id: roleId
        }
      });
      if (!role) {
        throw new Error('Role Not Found');
      }

      const permission = await prismaClient.permission.findFirst({
        where: {
          id: permissionId
        },
        include: {
          roles: true
        }
      });
      if (!permission) {
        throw new Error('Permission Not Found');
      }

      const roleHasPermission = permission.roles.some(r => r.id === roleId);
      if (roleHasPermission) {
        throw new Error('Role already has this permission');
      }

      const permissionUpdated = await prismaClient.role.update({
        where: { id: roleId },
        data: {
          permissions: {
            connect: { id: permissionId }
          }
        }, select:{
          id:true,
          name:true,
          description:true,
          permissions:{
            select:{
              id: true,
              name:true
            }
          }
        }
      });

      return permissionUpdated;
    } catch (error) {
      throw new Error('Failed to add permission to role: '+error.message);
    }
  }
}

export { InsertPermissionForRoleService };
