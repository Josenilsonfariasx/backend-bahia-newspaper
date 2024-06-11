import S3Storage from "../../utils/S3Storage";

const s3 = S3Storage.getInstance();

class UploadImagesService {
  async execute(file: Express.Multer.File): Promise<string> {
    const fileUrl = await s3.saveFile(file.filename);
    // Retorna a URL
    return fileUrl;
  }
}

export default UploadImagesService;
