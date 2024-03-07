import prismaClient from "../../prisma";

class ListCategoryService {
  async execute() {
    try {
      const categories  = await prismaClient.category.findMany({})
      return categories;
    } catch (error) {
      throw new Error('Failed to list all categories: ' +error.message)
    }
  }
}
export { ListCategoryService };