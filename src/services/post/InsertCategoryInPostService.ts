import prismaClient from "../../prisma";

interface PostRequest {
  post_id: string;
  category_id: string;
}

class InsertCategoryInPostService {
  async execute({ post_id, category_id}: PostRequest) {
    try { 
      if(!post_id || !category_id) throw new Error('Post ID and Category ID are required.')

      const post = await prismaClient.post.findUnique({ where: { id: post_id }, include: { categories: true }})
      if(!post) throw new Error('Post not found.')
      
      const category = await prismaClient.category.findUnique({ where: { id: category_id } })
      if(!post) throw new Error('Category not found.')

      const categoryAlreadyInserted = post.categories.find(category => category.id === category_id)
      if(categoryAlreadyInserted) throw new Error('Category already inserted in this post.')
      const postUpdated = await prismaClient.post.update({ where: { id: post_id }, include:{categories:true}, data: { categories: { connect: { id: category_id } } } })
      return postUpdated
    } catch (error) {
      throw new Error('Failed to insert category in Post: '+error.message)
    }
  }
}
export { InsertCategoryInPostService };