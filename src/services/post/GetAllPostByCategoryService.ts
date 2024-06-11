import prismaClient from "../../prisma";

interface CategoryRequest {
  id: string;
}

class GetAllPostsByIdCategoryService {
  async execute({ id }: CategoryRequest) {
    try {
      if (!id) throw new Error("Id da categoria é obrigatório");

      const posts = await prismaClient.post.findMany({
        where: {
          categories: {
            some: {
              id: id,
            },
          },
        },
      });

      return posts;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export { GetAllPostsByIdCategoryService };
