import prismaClient from "../../prisma";

class ListAllPostService {
  async execute(){
    try {
      const posts = await prismaClient.post.findMany()
      return posts;
    } catch (error) {
      throw new Error('Failed to list all posts' +error.message);
    }
  }
}
export { ListAllPostService };