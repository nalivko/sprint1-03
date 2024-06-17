import { Request, Response } from "express"
import { postsRepository } from "../posts-db-repository"
import { PostViewModel } from "../../../input-output-types/posts-types"

export const findPostController = async (req: Request, res: Response<PostViewModel>) => {
    
    const post = await postsRepository.getPostById(req.params.id)
    
    if(post) {
        res.send(post)
    } else {
        res.sendStatus(404)
    }
}