import prismaClient from "../../prisma";

interface PostRequest {
  id: string;
  title: string;
  content: string;
  categoryId: string; // ID da nova categoria
}

class UpdatePostService {
  async execute({ id, title, content, categoryId }: PostRequest) {
    try {
      if (!id) throw new Error("Id from Post is required");
      if (!title && !content && categoryId)
        throw new Error("Title and Content and Category from Post are required");

      const post = await prismaClient.post.findFirst({ where: { id }, include: { categories: true } });
      if (!post) throw new Error("Post not found");

      const updatedPost = await prismaClient.post.update({
        where: { id },
        data: {
          title: title !== "" && title !== null ? title : post.title,
          content: content !== "" && content !== null ? content : post.content,
          categories: {
            set: categoryId ? [{ id: categoryId }] : post.categories,
          },
        },
        include: { tags: true, categories: true },
      });

      return updatedPost;
    } catch (error) {
      throw new Error("Failed to update post: " + error.message);
    }
  }
}

export { UpdatePostService };
