import { Request, Response } from "express"
import { blogsRepository } from "../blogs-db-repository"
import { BlogViewModel } from "../../../input-output-types/blogs-types"

export const getAllBlogsController = async (req: Request, res: Response<BlogViewModel[]>) => {

    const allBlogs = await blogsRepository.getAllBlogs()
    
    res.send(blogsRepository.mapAllBlogs(allBlogs))
}