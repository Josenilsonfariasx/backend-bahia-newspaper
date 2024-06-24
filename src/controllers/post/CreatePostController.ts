import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController {
  async handle(req: Request, res: Response) {
    let files: Express.Multer.File[] = req.files as Express.Multer.File[];
    const { title, content, categoryIds, tagIds } = req.body;

    // Renomear arquivos
    files = files.map((file) => {
      file.filename = file.filename.replace(/\s/g, "");
      return file;
    });

    const createPostService = new CreatePostService();
    const post = await createPostService.execute({ title, content, files, categoryIds, tagIds });
    return res.json(post);
  }
}

export { CreatePostController };
