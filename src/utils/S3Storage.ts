import path from "path";
import fs from "fs";
import mime from "mime-types";
import aws, { S3 } from "aws-sdk";
import uploadConfig from "../configs/multerConfig";

class S3Storage {
  private static instance: S3Storage;
  private client: S3;

  private constructor() {
    this.client = new aws.S3({
      region: "us-east-1",
    });
  }

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
      throw new Error("File not found");
    }

    await this.client
      .upload({
        Bucket: "jornal-da-bahia-backend-1",
        Key: filename,
        ACL: "public-read",
        Body: fs.createReadStream(originalPath),
        ContentType,
      })
      .promise();

    await fs.promises.unlink(originalPath);

    const fileUrl = `https://jornal-da-bahia-backend-1.s3.amazonaws.com/${filename}`;

    return fileUrl;
  }

  async deleteFile(filename: string) {
    const params = {
      Bucket: "jornal-da-bahia-backend-1",
      Key: filename,
    };

    await this.client.deleteObject(params).promise();
  }
}

export default S3Storage;
