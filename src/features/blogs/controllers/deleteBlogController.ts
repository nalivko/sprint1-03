import { Request, Response } from "express"
import { blogsRepository } from "../blogs-db-repository"

export const deleteBlogController = async (req: Request<{id: string}>, res: Response) => {
    
    const isDeleted = await blogsRepository.deleteBlog(req.params.id)

    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
}