import prismaClient from "../../prisma";

interface TagRequest {
  id: string;
}

class DeleteTagService {
  async execute({id}:TagRequest) {
    try {
      if(!id) throw new Error('Invalid id')
      const tag = await prismaClient.tag.delete({ where: { id } })
      return tag
    } catch (error) {
      throw new Error('Failed to delete tag: '+error.message)
    }
  }
}
export { DeleteTagService };