import { Request, Response, NextFunction } from "express";
import { body } from "express-validator";
import { authMiddleware } from "../../../global-middlewares/authMiddleware";
import { checkErrorsMiddleware } from "../../../global-middlewares/checkErrorsMiddleware";

export const nameValidator = body('name').isString().withMessage('name must be a string')
    .trim().isLength({min: 1, max: 15}).withMessage('The name length must be between 1 and 15 characters')

export const descriptionValidator = body('description').isString().withMessage('description must be a string')
    .trim().isLength({min: 1, max: 500}).withMessage('The name length must be between 1 and 500 characters')

export const websiteUrlValidator = body('websiteUrl').isString().withMessage('website url must be a string')
    .trim().isURL().withMessage('website url must be valid url')
    .matches('^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$').withMessage('pattern')
    .isLength({min: 1, max: 100}).withMessage('The website url length must be between 1 and 100 characters')


export const blogValidators = [
    authMiddleware,
    nameValidator,
    descriptionValidator,
    websiteUrlValidator,
    checkErrorsMiddleware
]