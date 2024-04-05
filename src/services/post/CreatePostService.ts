import multer from 'multer'
import UploadImagesService from '../aws/uploadImagesService';
import prismaClient from '../../prisma';

interface PostRequest {
  title: string;
  content: string;
  file: Express.Multer.File
}

const uploadService = new UploadImagesService();

class CreatePostService {
  async execute({ title, content, file }: PostRequest) {
    try {
      if(!title || !content) throw new Error('Title and Content are required')

      const fileUrl = await uploadService.execute(file);
      const uploadedFile = { filename: file.originalname, url: fileUrl };

      const post = await prismaClient.post.create({
        data:{
          title,
          content,
          photoUrls: [uploadedFile.url],
          published: true,
          publishedAt: new Date()
        }, include: {
          categories: true,
          tags: true
        }
      })

      return post;
    } catch (error) {
      throw new Error('Erro durante o upload'+ error.message);
    }
  }
}
export { CreatePostService };