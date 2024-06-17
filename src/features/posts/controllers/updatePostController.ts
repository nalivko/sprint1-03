import { Request, Response } from "express"
import { postsRepository } from "../posts-db-repository"

export const updatePostController = async (req: Request, res: Response) => {
    
    const isUpdated = await postsRepository.updatePost(req.params.id, req.body)

    if(isUpdated){
        res.send(204)
    } else {
        res.sendStatus(404)
    }
}