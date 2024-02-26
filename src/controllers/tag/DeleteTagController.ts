import { Request, Response } from "express";
import { DeleteTagService } from "../../services/tag/DeleteTagService";

class DeleteTagController {
  async handle(req: Request, res: Response) {
    const id  = req.params.id as string
    const deleteTagController = new DeleteTagService()
    const tag = await deleteTagController.execute({id})
    return res.json(tag)
  }
}

export { DeleteTagController };