import prismaClient from "../../prisma";
import { DeleteImageService } from "../aws/DeleteImageService";

interface PostRequest {
  id: string;
  urlPost: string[];
}

class DeleteImagefromPostService {
  async execute({ id, urlPost }: PostRequest) {
    try {
      if(!id) throw new Error('ID is required to find the post')
      if(!urlPost) throw new Error('URL is required to find the image')

      const files = urlPost.map(url => url.split('https://aula-youtube1.s3.amazonaws.com/')[1]) 

      const post = await prismaClient.post.findFirst({where: {id}})
      if(!post) throw new Error('Post not found')

      const imageAlreadyExists = urlPost.every(file => post.photoUrls.includes(file))

      if(!imageAlreadyExists) throw new Error('Image not found in the post')

      const deleteImageService = new DeleteImageService();

      // Processar os arquivos um de cada vez
      for (const file of files) {
        await deleteImageService.execute(file);
      }

      // Otimizar a operação de filtragem
      const newPhotoUrls = post.photoUrls.filter(photo => !urlPost.includes(photo))

      const postUpdated = await prismaClient.post.update({
        where: {id},
        data: {
          photoUrls: {
            set: newPhotoUrls
          }
        }
      })

      return {sucess: true}
    } catch (error) {
      throw new Error('Erro during delete image from post: '+ error.message);
    }
  }
}

export { DeleteImagefromPostService }