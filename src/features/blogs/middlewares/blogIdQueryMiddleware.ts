import { NextFunction, Request, Response } from "express";
import { param, validationResult } from "express-validator";
import { blogsRepository } from "../blogs-db-repository";
import { BlogInputModel } from "../../../input-output-types/blogs-types";
import { PostInputModel } from "../../../input-output-types/posts-types"

export const blogIdQueryMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const blog = await blogsRepository.getBlogById(req.params.blogId)

    if(!blog) {
        res.send(404)
        return
    }
    
    next()

}