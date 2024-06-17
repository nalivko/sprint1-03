import { Request, Response } from "express"
import { BlogViewModel } from "../../../input-output-types/blogs-types"
import { blogsRepository } from "../blogs-db-repository"

export const findBlogController = async (req: Request<{id: string}>, res: Response<BlogViewModel | null>) => {
    
    const blog = await blogsRepository.getBlogById(req.params.id)

    if (blog) {
        res.send(blog)
    } else {
        res.sendStatus(404)
    }
}