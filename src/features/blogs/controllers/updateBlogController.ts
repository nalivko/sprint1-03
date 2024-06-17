import { Request, Response } from "express"
import { blogsRepository } from "../blogs-db-repository"
import { BlogInputModel, BlogViewModel } from "../../../input-output-types/blogs-types"

export const updateBlogController = async (req: Request<{id: string}, any, BlogInputModel>, res: Response) => {
    
    const isUpdated = await blogsRepository.updateBlog(req.params.id, req.body)
    
    if(isUpdated){
        res.send(204)
    } else {
        res.send(404)
    }
}