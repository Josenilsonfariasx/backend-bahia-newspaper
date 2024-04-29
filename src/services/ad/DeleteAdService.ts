import prismaClient from "../../prisma";

interface IDeleteAdService {
  ad_id: string;
}
class DeleteAdService {
  async execute({ ad_id }: IDeleteAdService) {
    try {
      
      if(!ad_id) throw new Error("Ad_id is required")
        const adFound = await prismaClient.ad.findUnique({
      where:{
        id: ad_id
      }
    })
    if(!adFound) throw new Error("Ad not found")
      const ad = await prismaClient.ad.delete({
    where:{
        id: ad_id
      }
    })
    return ad;
  } catch (error) {
    throw new Error('Err:'+ error.message);
  }
  }
}
export { DeleteAdService };