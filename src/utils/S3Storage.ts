import path from 'path';
import fs from 'fs';
import mime from 'mime-types';
import aws, { S3 } from 'aws-sdk';

import uploadConfig from '../configs/multerConfig';

class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: 'us-east-1',
    });
  }

  async saveFile(filename: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.directory, filename);

    const ContentType = mime.lookup(originalPath);

    if (!ContentType) {
      throw new Error('File not found');
    }

    const fileContent = await fs.promises.readFile(originalPath);

    await this.client
      .putObject({
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

  async deleteFile(filename: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: 'aula-youtube1',
        Key: filename,
      })
      .promise();
  }
}

export default S3Storage;
