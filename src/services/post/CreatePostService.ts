import multer from 'multer'
import UploadImagesService from '../aws/uploadImagesService';
import prismaClient from '../../prisma';
// import heapdump from 'heapdump';

interface PostRequest {
  title: string;
  content: string;
  files: Express.Multer.File[]
}

class CreatePostService {
  async execute({ title, content, files }: PostRequest) {
    try {
      if(!title || !content) throw new Error('Title and Content are required')

      const photos = [];
      const videos = [];
      for (const file of files) {
          if (file.mimetype.startsWith('image')) {
              photos.push(file);
          } else if (file.mimetype.startsWith('video')) {
              videos.push(file);
          }
      }

      const uploadService = new UploadImagesService();

      const uploadedPhotos = [];
      for (const file of photos) {
        const fileUrl = await uploadService.execute(file);
        uploadedPhotos.push({ filename: file.originalname, url: fileUrl });
      }

      const uploadedVideos = [];
      for (const file of videos) {
        const fileUrl = await uploadService.execute(file);
        uploadedVideos.push({ filename: file.originalname, url: fileUrl });
      }

      const post = await prismaClient.post.create({
        data:{
          title: title,
          content:content,
          photoUrls: uploadedPhotos.map(photo => photo.url),
          videoUrls: uploadedVideos.map(video => video.url),
          published: true,
          publishedAt: new Date()
        }, include: {
          categories: true,
          tags: true
        }
      })

      return post;
    } catch (error) {
      console.error('Erro durante o upload:', error);
      throw new Error('Erro durante o upload'+ error.message);
    }
  }
}
export { CreatePostService };