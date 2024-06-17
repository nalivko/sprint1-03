import { Request, Response } from "express"
import { postsRepository } from "../posts-db-repository"
import { PostViewModel } from "../../../input-output-types/posts-types"

export const createPostController = async (req: Request, res: Response<PostViewModel>) => {
    
    const newPost = await postsRepository.createPost(req.body)

    res.status(201).send(newPost)
}