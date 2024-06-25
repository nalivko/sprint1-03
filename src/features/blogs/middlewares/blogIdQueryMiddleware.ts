import { NextFunction, Request, Response } from "express";
import { blogsRepository } from "../blogs-db-repository";

export const blogIdQueryMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const blog = await blogsRepository.getBlogById(req.params.blogId)

    console.log('blog', blog);


    if (!blog) {
        res.sendStatus(404)
        return
    }

    next()

}