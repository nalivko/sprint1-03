import { Request, Response } from "express"
import { blogsRepository } from "../blogs-db-repository"
import { BlogInputModel, BlogViewModel } from "../../../input-output-types/blogs-types"

export const createBlogController = async (req: Request<any, any, BlogInputModel>, res: Response<BlogViewModel>) => {
    
    const newBlog = await blogsRepository.createBlog(req.body)

    res.status(201).send(blogsRepository.mapBlog(newBlog))
}