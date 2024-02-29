import prismaClient from "../../prisma";

interface PostRequest {
  id: string;
}
class GetPostByIdService {
  async execute({ id }: PostRequest) {
    try {
      if(!id) throw new Error('Id from Post is required')
      const post = await prismaClient.post.findFirst({ where: { id } })
      if(!post) throw new Error('Post not found')
      return post
    } catch (error) {
      throw new Error('Failed to get post: '+error.message)
    }
  }
}
export { GetPostByIdService };