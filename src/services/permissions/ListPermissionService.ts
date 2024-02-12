import prismaClient from "../../prisma";

class ListPermissionService {
  async execute() {
    try {
      const list = await prismaClient.permission.findMany()
      return list
    } catch (error) {
      throw new Error('Failed to list all permissions: '+error.message)
    }
  }
}
export { ListPermissionService };