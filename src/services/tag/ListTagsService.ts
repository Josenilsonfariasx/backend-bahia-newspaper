import prismaClient from "../../prisma";

class ListTagsService {
  async execute() {
    try {
      const tags = await prismaClient.tag.findMany()
      return tags;
    } catch (error) {
      throw new Error('Failed to list tags: ' +error.message);
    }
  }
}
export { ListTagsService };