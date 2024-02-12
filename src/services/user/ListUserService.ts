import prismaClient from "../../prisma";

class ListUserService {
  async execute() {
    try {
      const users = await prismaClient.user.findMany({
        select: {
          id: true,
          username:true,  
          email: true,
          role: true,
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