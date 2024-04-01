import multer from 'multer'
import UploadImagesService from '../aws/uploadImagesService';
import prismaClient from '../../prisma';

interface PostRequest {
  title: string;
  content: string;
  files: Express.Multer.File[]
}

const uploadService = new UploadImagesService();

class CreatePostService {
  async execute({ title, content, files }: PostRequest) {
    try {
      if(!title || !content) throw new Error('Title and Content are required')

      const uploadFile = async (file: Express.Multer.File) => {
        const fileUrl = await uploadService.execute(file);
        return { filename: file.originalname, url: fileUrl };
      }

      const uploadedFiles = [];
      for (const file of files) {
        const uploadedFile = await uploadFile(file);
        uploadedFiles.push(uploadedFile);
      }

      const post = await prismaClient.post.create({
        data:{
          title,
          content,
          photoUrls: uploadedFiles.map(({ url }) => url),
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