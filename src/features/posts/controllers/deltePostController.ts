import { Request, Response } from "express"
import { postsRepository } from "../posts-db-repository"

export const deletePostController = async (req: Request<{id: string}>, res: Response) => {
    
    const isDeleted = await postsRepository.deletePost(req.params.id)

    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
}