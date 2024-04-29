import prismaClient from "../../prisma";

class ListAllAdService {
  async execute() {
    try {
      const ads = await prismaClient.ad.findMany()
      return ads
    } catch (error) {
      throw new Error("Erro: "+error)
    }
  }
}
export { ListAllAdService };