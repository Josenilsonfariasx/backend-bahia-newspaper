import prismaClient from "../../prisma";

interface PostRequest {
  id: string;
  published: boolean;
}
class UpdateStatusPostService {
  async execute({ id, published }: PostRequest) {
    try {
      if(!id) throw new Error('Id from Post is required')
      const post = await prismaClient.post.findFirst({ where: { id } })
      if(!post) throw new Error('Post not found')
      const updatedPost = await prismaClient.post.update({ where: { id }, data: { published: published } })
      return updatedPost
    } catch (error) {
      throw new Error('Failed to update status from post published: ' +error.message)
    }
  }
}
export { UpdateStatusPostService };