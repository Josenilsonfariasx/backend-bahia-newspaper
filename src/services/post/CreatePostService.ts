import multer from "multer";
import UploadImagesService from "../aws/uploadImagesService";
import prismaClient from "../../prisma";

interface PostRequest {
  title: string;
  content: string;
  files: Express.Multer.File[];
  categoryIds: string[]; // Novo campo
  tagIds: string[]; // Novo campo
}

class CreatePostService {
  async execute({ title, content, files, categoryIds, tagIds }: PostRequest) {
    try {
      if (!title || !content) throw new Error("Title and Content are required");

      const photos = [];
      const videos = [];
      for (const file of files) {
        if (file.mimetype.startsWith("image")) {
          photos.push(file);
        } else if (file.mimetype.startsWith("video")) {
          videos.push(file);
        }
      }

      const uploadedPhotos = await Promise.all(
        photos.map(async (file) => {
          const fileUrl = await new UploadImagesService().execute(file);
          return { filename: file.originalname, url: fileUrl };
        })
      );

      const uploadedVideos = await Promise.all(
        videos.map(async (file) => {
          const fileUrl = await new UploadImagesService().execute(file);
          return { filename: file.originalname, url: fileUrl };
        })
      );

      const post = await prismaClient.post.create({
        data: {
          title: title,
          content: content,
          photoUrls: uploadedPhotos.map((photo) => photo.url),
          videoUrls: uploadedVideos.map((video) => video.url),
          published: true,
          publishedAt: new Date(),
          categories: {
            connect: categoryIds.map((id) => ({ id })),
          },
          tags: {
            connect: tagIds.map((id) => ({ id })),
          },
        },
        include: {
          categories: true,
          tags: true,
        },
      });

      return post;
    } catch (error) {
      console.error("Erro durante o upload:", error);
      throw new Error("Erro durante o upload: " + error.message);
    }
  }
}

export { CreatePostService };
