import prismaClient from "../../prisma";

interface CategoryRequest {
  id: string;
  name: string;
  description: string;
}
class UpdateCategoryService {
  async execute({ id, name, description}: CategoryRequest) {
    try {
      if(!id) throw new Error('ID from post is required')
      if(!name && !description) throw new Error('Name or description is required')
      const categoryExists = await prismaClient.category.findFirst({
        where: {
          id
        }
      })
      if(!categoryExists) throw new Error('Category not found')
      const category = await prismaClient.category.update({
        where: {
          id
        },
        data: {
          name: name !== '' || name!== null ? name : categoryExists.name,
          description: description !== '' || description!== null  ? description : categoryExists.description
        }
      })
      return category
    } catch (error) {
      throw new Error('Failed to update category: ' +error.message)      
    }
  }
}
export { UpdateCategoryService };