import { BlogDbType } from "../../db/blog-db-type"
import { db } from "../../db/db"
import { BlogInputModel } from "../../input-output-types/blogs-types"

export const blogsRepository = {
    getAllBlogs(){
        const allBlogs = db.blogs

        return allBlogs
    },
    
    getBlogById(id: string){
        return db.blogs.find(blog => blog.id === id)
    },

    createBlog(blog: BlogInputModel){
        const newBlog: BlogDbType = {
            id: new Date().toISOString(),
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl,
            createdAt: new Date().toISOString(),
            isMembership: false
        }

        db.blogs.push(newBlog)
        return newBlog.id
    },

    updateBlog(id: string, newData: BlogInputModel){
        let blog = this.getBlogById(id)

        if(blog) {
            blog.name = newData.name,
            blog.description = newData.description,
            blog.websiteUrl = newData.websiteUrl

            return true
        } else {
            return false
        }
    },

    deleteBlog(id: string){
        for (let i = 0; i < db.blogs.length; i++) {
            if (db.blogs[i].id === id) {
                db.blogs.splice(i, 1)
                return true
            }
        }
        return false
    },

}