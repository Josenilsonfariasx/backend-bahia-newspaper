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
      // quero pegar o nome de todas as urlPost
      const files = urlPost.map(url => url.split('https://aula-youtube1.s3.amazonaws.com/')[1]) 

      const post = await prismaClient.post.findFirst({where: {id}})
      if(!post) throw new Error('Post not found')

      // quero verificar se existe todos os files no post
      const imageAlreadyExists = urlPost.every(file => post.photoUrls.includes(file))

      if(!imageAlreadyExists) throw new Error('Image not found in the post')
      const DeleteImage = await Promise.all(files.map(async (file) => {
        const fileUrl = await new DeleteImageService().execute(file);
        return fileUrl;
      }));
    // agora apos a imagem deletada quero retirar ela do meu post
      const postUpdated = await prismaClient.post.update({
        where: {id},
        data: {
          photoUrls: {
            set: post.photoUrls.filter(photo => !urlPost.includes(photo))
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