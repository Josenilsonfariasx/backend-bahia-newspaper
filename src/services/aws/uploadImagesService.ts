import S3Storage from '../../utils/S3Storage';

class UploadImagesService {
    async execute(file: Express.Multer.File): Promise<string> {
        const s3 = S3Storage.getInstance();
        const fileUrl = await s3.saveFile(file.filename)
        console.log(file)
        // Retorna a URL
        return fileUrl;
    }
}

export default UploadImagesService;
