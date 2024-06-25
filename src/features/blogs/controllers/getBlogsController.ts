import { Request, Response } from "express"
import { blogsService } from "../services/blogs-service"

export const getBlogsController = async (req: Request, res: Response<{}>) => {

    const allBlogs = await blogsService.findBlogs(req.query as { [key: string]: string | undefined })

    res.send(allBlogs)
}