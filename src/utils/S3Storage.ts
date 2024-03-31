import path from 'path';
import fs from 'fs';
import mime from 'mime-types';
import aws, { S3 } from 'aws-sdk';
import uploadConfig from '../configs/multerConfig';

class S3Storage {
  private static instance: S3Storage;
  private client: S3;

  private constructor() {
    this.client = new aws.S3({
      region: 'us-east-1',
    });
  }

  // Implementação do padrão Singleton para reutilizar a instância da classe S3Storage
  public static getInstance(): S3Storage {
    if (!S3Storage.instance) {
      S3Storage.instance = new S3Storage();
    }
    return S3Storage.instance;
  }

  async saveFile(filename: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.directory, filename);

    const ContentType = mime.lookup(originalPath);

    if (!ContentType) {
      throw new Error('File not found');
    }

    // Cria um stream de leitura para ler o arquivo
    const fileContent = fs.createReadStream(originalPath);

    await this.client
      .upload({
        Bucket: 'aula-youtube1',
        Key: filename,
        ACL: 'public-read',
        Body: fileContent,
        ContentType,
      })
      .promise();

    await fs.promises.unlink(originalPath);

    // Construir a URL do objeto
    const fileUrl = `https://aula-youtube1.s3.amazonaws.com/${filename}`;

    return fileUrl;
  }

  async deleteFile(filename: string) {
    const params = {
      Bucket: 'aula-youtube1', 
      Key: filename
    };

    // Usar promessas em vez de callbacks
    await this.client.deleteObject(params).promise();
  }
}

export default S3Storage;