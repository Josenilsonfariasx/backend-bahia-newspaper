import prismaClient from "../../prisma";

class ListRoleService {
  async execute() {
    try {
      const list = await prismaClient.role.findMany()
      return list
    } catch (error) {
      throw new Error('Failed to list all roles: '+error.message)
    }
  }
}
export { ListRoleService };