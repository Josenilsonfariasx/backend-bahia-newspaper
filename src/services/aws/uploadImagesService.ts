import S3Storage from "../../utils/S3Storage";

const s3 = S3Storage.getInstance();

class UploadImagesService {
  async execute(file: Express.Multer.File): Promise<string> {
    const filename = file.filename.replace(/\s/g, "");
    const fileUrl = await s3.saveFile(filename);
    // Retorna a URL
    return fileUrl;
  }
}
export default UploadImagesService;
