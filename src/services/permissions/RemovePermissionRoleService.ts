import prismaClient from "../../prisma";

interface PermissionRequest {
  permissionId: string;
  roleId: string;
}

class RemovePermissionRoleService {
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
      if (!roleHasPermission) {
        throw new Error('Role does not have this permission');
      }

      const RoleUpdate = await prismaClient.role.update({
        where: { id: roleId },
        data: {
          permissions: {
            disconnect: { id: permissionId }
          }
        }
      });

      return RoleUpdate;
    } catch (error) {
      throw new Error('Failed to Remove Permission from User: '+error.message);
    }
  }
}

export { RemovePermissionRoleService };
