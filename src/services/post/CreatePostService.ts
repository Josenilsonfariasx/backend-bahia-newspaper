import multer from 'multer'
// import UploadImagesService from '../aws/uploadImagesService';
import prismaClient from '../../prisma';

interface PostRequest {
  title: string;
  content: string;
  files: Express.Multer.File[]
}

// const uploadService = new UploadImagesService();

class CreatePostService {
  async execute({ title, content, files }: PostRequest) {
    try {
      if(!title || !content) throw new Error('Title and Content are required')

      // const uploadFile = async (file: Express.Multer.File) => {
        // const fileUrl = await uploadService.execute(file);
        // return { filename: file.originalname, url: fileUrl };
      // }

      const [photos, videos] = files.reduce((acc, file) => {
        if (file.mimetype.startsWith('image')) {
          acc[0].push(file);
        } else if (file.mimetype.startsWith('video')) {
          acc[1].push(file);
        }
        return acc;
      }, [[], []]);

      // const [uploadedPhotos, uploadedVideos] = await Promise.all([
        // Promise.all(photos.map(uploadFile)),
        // Promise.all(videos.map(uploadFile))
      // ]);

      const post = await prismaClient.post.create({
        data:{
          title,
          content,
          // photoUrls: uploadedPhotos.map(({ url }) => url),
          // videoUrls: uploadedVideos.map(({ url }) => url),
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