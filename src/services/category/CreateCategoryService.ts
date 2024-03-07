import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  async execute({ name, description }: CategoryRequest){
    try {
      if(!name || !description) throw new Error('Invalid data')

      const category = await prismaClient.category.create({
        data: {
          name,
          description
        }
      });
      return category;
    } catch (error) {
      throw new Error('Failed to create posts: '+ error.message);
    }
  }
}
export { CreateCategoryService };