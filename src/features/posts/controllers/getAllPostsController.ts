import { Request, Response } from "express"
import { postsRepository } from "../posts-db-repository"
import { PostViewModel } from "../../../input-output-types/posts-types"

export const getAllPostsController = async (req: Request, res: Response<PostViewModel[]>) => {

    const allBlogs = await postsRepository.getAllPosts()
    
    res.send(allBlogs)
}