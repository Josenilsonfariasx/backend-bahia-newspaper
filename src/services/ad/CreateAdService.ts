import prismaClient from "../../prisma";
import UploadImagesService from "../aws/uploadImagesService";

interface ICreateAdService {
  description: string;
  files: Express.Multer.File[];
  link: string;
  type: string;
}
class CreateAdService {
  async execute({ description, files, link, type }: ICreateAdService) {
    try {
      if (!description || !files) throw new Error("Description and Files are required");

      const photos = [];
      const videos = [];
      for (const file of files) {
        if (file.mimetype.startsWith("image")) {
          photos.push(file);
        } else if (file.mimetype.startsWith("video")) {
          videos.push(file);
        }
      }
      // Executar o serviço de upload para cada arquivo de foto
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
      const ad = await prismaClient.ad.create({
        data: {
          description: description,
          imageUrl: uploadedPhotos.map((photo) => photo.url),
          videoUrl: uploadedVideos.map((video) => video.url),
          link: link,
          type: type,
        },
      });
      return ad;
    } catch (error) {
      throw new Error("Err:" + error.message);
    }
  }
}
export { CreateAdService };
