import prismaClient from "../../prisma";

interface CategoryRequest {
  id: string;
}

class DeleteCategoryService {
  async execute({ id }: CategoryRequest) {
    try {
      if(!id) throw new Error('ID from post is required')
      const categoryExists = await prismaClient.category.findFirst({
        where: {
          id
        }
      })
      if(!categoryExists) throw new Error('Category not found')
      const category = await prismaClient.category.delete({
        where: {
          id
        }
      })
      return category
    } catch (error) {
      throw new Error('Failed to delete category: ' +error.message)
    }
  }
}
export { DeleteCategoryService };