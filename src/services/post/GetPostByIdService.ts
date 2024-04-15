import prismaClient from "../../prisma";

interface PostRequest {
  id: string;
}
class GetPostByIdService {
  async execute({ id }: PostRequest) {
    try {
      if(!id) throw new Error('Id from Post is required')
      const post = await prismaClient.post.findFirst({ where: { id }, include: {tags: true, categories:true}})
      const postUpdated = await prismaClient.post.update({where: {id}, data: {post_view_count: post.post_view_count+1}, include: {tags: true, categories:true}})
      if(!post) throw new Error('Post not found')
      return postUpdated
    } catch (error) {
      throw new Error('Failed to get post: '+error.message)
    }
  }
}
export { GetPostByIdService };