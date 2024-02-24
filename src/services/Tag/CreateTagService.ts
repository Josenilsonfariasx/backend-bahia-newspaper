import prismaClient from "../../prisma";

interface TagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: TagRequest){
    try {
      if(!name) throw new Error('Name is required');
      const tagExist = await prismaClient.tag.findFirst({where:{name}})
      if(tagExist) throw new Error('Tag already exists');
      const tag = await prismaClient.tag.create({data:{name}});
      
      return tag;
    } catch (error) {
      throw new Error('Failed to create tag: ' +error.message);
    }
  }
}
export { CreateTagService };