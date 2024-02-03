import prismaClient from "../../prisma";

class ListUserService {
  async execute() {
    try {
      const users = await prismaClient.user.findMany({
        select: {
          id: true,
          username:true,  
          email: true,
          roleId: true,
          permissions: true,
          _count: true,
        }
      }) 
      return users
    } catch (error) {
      throw new Error('Failed to List users: '+error.message)
    }
  }
}
export { ListUserService };