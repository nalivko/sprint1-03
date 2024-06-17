import { BlogDbType } from "../../db/blog-db-type"
import { BlogInputModel, BlogViewModel } from "../../input-output-types/blogs-types"
import { blogsCollection } from "../../db/mongodb"

export const blogsRepository = {
    async getAllBlogs(): Promise<BlogDbType[]>{
        const allBlogs = blogsCollection.find({}).toArray()

        return allBlogs
    },
    
    async getBlogById(id: string): Promise<BlogDbType | null>{
        let blog = await blogsCollection.findOne({id: id})
        return blog ? blog : null
    },

    async createBlog(blog: BlogInputModel): Promise<BlogViewModel>{
        const newBlog: BlogDbType = {
            id: new Date().toISOString(),
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl,
            createdAt: new Date().toISOString(),
            isMembership: false
        }

        await blogsCollection.insertOne(newBlog)

        return newBlog
    },

    async updateBlog(id: string, newData: BlogInputModel): Promise<boolean> {
        let result = await blogsCollection.updateOne({id: id}, {$set: {
            name: newData.name,
            description: newData.description,
            websiteUrl: newData.websiteUrl,
        }})

        return result.matchedCount === 1
    },

    async deleteBlog(id: string): Promise<boolean> {
        const result = await blogsCollection.deleteOne({id: id})

        return result.deletedCount === 1
    },

    mapBlog(blog: BlogViewModel) {
        return {
            id: blog.id,
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl,
            createdAt: blog.createdAt,
            isMembership: blog.isMembership
        }
    },

    mapAllBlogs(blogs: BlogViewModel[]) {
        return blogs.map(blog => {
            return {
                id: blog.id,
                name: blog.name,
                description: blog.description,
                websiteUrl: blog.websiteUrl,
                createdAt: blog.createdAt,
                isMembership: blog.isMembership
            }
        })
    }
}