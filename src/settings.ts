import dotenv from "dotenv";
dotenv.config()

export const SETTINGS = {
    // все хардкодные значения должны быть здесь, для удобства их изменения
    PORT: process.env.PORT || 3003,
    PATH: {
        BLOGS: '/api/blogs',
        POSTS: '/api/posts',
        TESTS: '/api/testing',
    },
    ADMIN_AUTH: process.env.ADMIN_AUTH || 'admin:qwerty',
    MONGO_DB: {
        MONGO_URI: process.env.MONGO_URL || "mongodb://0.0.0.0:27017'",
        // MONGO_URI: process.env.MONGO_URL || "mongodb+srv://nalivkodmitr:dZALiMYZB2299ISO@cluster0.s8fikcl.mongodb.net/+",
        DB_NAME: "bloggers_platform",
        BLOG_COLLECTION_NAME: "blogs",
        POST_COLLECTION_NAME: "posts"
    }
}