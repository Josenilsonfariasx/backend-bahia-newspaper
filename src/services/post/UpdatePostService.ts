import prismaClient from "../../prisma";

interface PostRequest {
  id: string;
  title: string;
  content: string;
}
class UpdatePostService {
  async execute({ id, title, content }: PostRequest) {
    try {
      if(!id) throw new Error('Id from Post is required')
      if(!title || !content) throw new Error('Title and Content from Post is required')
      const post = await prismaClient.post.findFirst({ where: { id } })
      if(!post) throw new Error('Post not found')
      const updatedPost = await prismaClient.post.update({
        where: { id },
        data: {
          title: title !== '' || title!== null ? title : post.title,
          content: content !== '' || content!== null ? content : post.content,
        }, include: {tags: true, categories:true}
      })
      return updatedPost
    } catch (error) {
      throw new Error('Failed to update post: ' +error.message)
    }
  }
}
export { UpdatePostService };