import prismaClient from "../../prisma";

interface CategoryRequest {
  id: string;
}
class GetCategoryByIdService {
  async execute({ id }: CategoryRequest) {
    try {
      if(!id) throw new Error('Id from category is required')
      const category = await prismaClient.category.findFirst({ where: { id } })
      if(!category) throw new Error('Category not found')
      return category
    } catch (error) {
      throw new Error('Failed to get category: ' +error.message)
    }
  }
}
export { GetCategoryByIdService }