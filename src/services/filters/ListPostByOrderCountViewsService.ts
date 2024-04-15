import prismaClient from "../../prisma";

class ListPostByOrderCountViewsService {
  async execute(){
    try {
      // List posts by order count views
      const posts = await prismaClient.post.findMany({orderBy: {post_view_count: 'desc'}, include: {tags: true, categories:true}})
      if(!posts) throw new Error('Posts not found')
        return posts
    } catch (error) {
      throw new Error('Failed to list posts by order count views: '+error.message)
    }
  }
}
export { ListPostByOrderCountViewsService };