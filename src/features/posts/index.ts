import { Router } from "express";
import { getAllPostsController } from "./controllers/getAllPostsController";
import { createPostController } from "./controllers/createPostController";
import { findPostController } from "./controllers/findPostController";
import { updatePostController } from "./controllers/updatePostController";
import { deletePostController } from "./controllers/deltePostController";
import { postValidators } from "./middlewares/postValidators";
import { queryValidator } from "../../global-middlewares/paginateValidator";
import { authMiddleware } from "../../global-middlewares/authMiddleware";


export const postsRouter = Router({})

postsRouter.get('/', ...queryValidator, getAllPostsController)
postsRouter.post('/', ...postValidators, createPostController)
postsRouter.get('/:id', findPostController)
postsRouter.put('/:id', ...postValidators, updatePostController)
postsRouter.delete('/:id', authMiddleware, deletePostController)