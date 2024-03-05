import prismaClient from "../../prisma";

interface PostRequest {
  id: string;
}

class DeletePostService {
  async execute({id}:PostRequest) {
    try {
      if(!id) throw new Error('Id from Post is required')
      const post = await prismaClient.post.findFirst({ where: { id } })
      if(!post) throw new Error('Post not found')
      const deletedPost = await prismaClient.post.delete({
        where: { id },
        include: {tags: true, categories:true}
      })
      return deletedPost
    } catch (error) {
      throw new Error('Failed to delete post: '+error.message)
    }
  }
}
export { DeletePostService };