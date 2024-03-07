import prismaClient from "../../prisma";

interface PostRequest{
  post_id: string;
  tag_id: string;
}
class RemoveTagFromPostService {
  async execute({ post_id, tag_id }: PostRequest) {
    try {
      if(!post_id || !tag_id) throw new Error('Post ID and Tag ID are required.')

      const post = await prismaClient.post.findUnique({ where: { id: post_id }, include: { tags: true, categories: true }})
      if(!post) throw new Error('Post not found.')
      
      const tag = await prismaClient.tag.findUnique({ where: { id: tag_id }, include: { posts: true } })
      if(!post) throw new Error('Tag not found.')

      const tagAlreadyInserted = post.tags.find(tag => tag.id === tag_id)
      if(!tagAlreadyInserted) throw new Error('Tag not inserted in this post.')
      const postUpdated = await prismaClient.post.update({ where: { id: post_id }, include:{tags:true, categories:true}, data: { tags: { disconnect: { id: tag_id } } } })
      return postUpdated
    } catch (error) {
      throw new Error('Failed to remove tag from Post: '+error.message)
    }
    
  }
}
export { RemoveTagFromPostService };