import prismaClient from "../../prisma";

interface TagRequest {
  id: string;
  name: string;
}

class UpdateTagService {
  async execute({ id, name }: TagRequest) {
    try {
      if (!id || !name) throw new Error("Id from tag or name not provided")
      const tagAlreadyExists = await prismaClient.tag.findFirst({ where: { id } })
      if (!tagAlreadyExists) throw new Error("Tag not found")
      const tag = await prismaClient.tag.update({ where: { id }, data: { name } })
      return tag
    } catch (error) {
      throw new Error('Failed to updated tag: '+error.message)
    }
  }
}
export { UpdateTagService };