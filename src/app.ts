import express from "express";
import cors from "cors"
import { SETTINGS } from "./settings";
import { blogsRouter } from "./features/blogs";
import { postsRouter } from "./features/posts";
import { testingRouter } from "./features/testing";

export const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({version: '1.0'})
})

app.use(SETTINGS.PATH.BLOGS, blogsRouter)
app.use(SETTINGS.PATH.POSTS, postsRouter)
app.use(SETTINGS.PATH.TESTS, testingRouter)