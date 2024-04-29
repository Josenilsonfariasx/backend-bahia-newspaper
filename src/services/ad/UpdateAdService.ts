import prismaClient from "../../prisma";
import UploadImagesService from "../aws/uploadImagesService";

interface IUpdateAdService {
  files: Express.Multer.File[];
  description: string;
  link: string;
  ad_id: string;
}
class UpdateAdService {
  async execute({ ad_id, description, link, files}: IUpdateAdService){
    try {
      const photos = [];
      const videos = [];
      let uploadedPhotos = [];
      let uploadedVideos = [];
      if(!ad_id) throw new Error("Ad_id is required")
      const adFound = await prismaClient.ad.findUnique({
        where:{
          id: ad_id
        }
      })
      if(!adFound) throw new Error("Ad not found")
        if(files.length !== 0){
          for (const file of files) {
            if (file.mimetype.startsWith('image')) {
              photos.push(file);
            } else if (file.mimetype.startsWith('video')) {
              videos.push(file);
            }
          }
        uploadedPhotos = await Promise.all(photos.map(async (file) => {
          const fileUrl = await new UploadImagesService().execute(file);
          return { filename: file.originalname, url: fileUrl };
        }));
        uploadedVideos = await Promise.all(videos.map(async (file) => {
          const fileUrl = await new UploadImagesService().execute(file);
          return { filename: file.originalname, url: fileUrl };
        }
      ));
  }
  const ad = await prismaClient.ad.update({
    where:{
      id: ad_id
    },
    data:{
      description: description ? description : adFound.description,
      imageUrl: uploadedPhotos.length !== 0 ? uploadedPhotos.map(photo => photo.url) : adFound.imageUrl,
      videoUrl: uploadedVideos.length !== 0 ? uploadedVideos.map(video => video.url) : adFound.videoUrl,
      link: link ? link : adFound.link,
    }
    })
    return ad;
  } catch (error) {
    throw new Error('Err:'+ error.message);
  }
  }
}
export { UpdateAdService };