import { Router } from "express";
import { getAllBlogsController } from "./controllers/getAllBlogsController";
import { createBlogController } from "./controllers/createBlogController";
import { findBlogController } from "./controllers/findBLogController";
import { deleteBlogController } from "./controllers/deleteBlogController";
import { updateBlogController } from "./controllers/updateBlogController";
import { blogValidators } from "./middlewares/blogValidators";
import { authMiddleware } from "../../global-middlewares/authMiddleware";

export const blogsRouter = Router({})

blogsRouter.get('/', getAllBlogsController)
blogsRouter.post('/', ...blogValidators, createBlogController)
blogsRouter.get('/:id', findBlogController)
blogsRouter.put('/:id', ...blogValidators, updateBlogController)
blogsRouter.delete('/:id', authMiddleware, deleteBlogController)
