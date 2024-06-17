import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { blogsRepository } from "../../blogs/blogs-db-repository";
import { authMiddleware } from "../../../global-middlewares/authMiddleware";
import { checkErrorsMiddleware } from "../../../global-middlewares/checkErrorsMiddleware";

export const titleValidator = body('title').isString().withMessage('title must be a string')
    .trim().isLength({ min: 1, max: 30 }).withMessage('The title length must be between 1 and 30 characters')

export const shortDescriptionValidator = body('shortDescription').isString().withMessage('short description must be a string')
    .trim().isLength({ min: 1, max: 100 }).withMessage('The short description length must be between 1 and 100 characters')

export const contentValidator = body('content').isString().withMessage('content must be a string')
    .trim().isLength({ min: 1, max: 1000 }).withMessage('The content length must be between 1 and 1000 characters')

export const blogIdValidator = body('blogId').isString().withMessage('not string')
    .trim().custom(blogId => {
        const blog = blogsRepository.getBlogById(blogId)
        return !!blog
    }).withMessage('must be a blog from blogs table')



export const postValidators = [
    authMiddleware,
    titleValidator,
    shortDescriptionValidator,
    contentValidator,
    blogIdValidator,
    checkErrorsMiddleware
]