import { PostDbType } from "../../db/post-db-type"
import { db } from "../../db/db"
import { PostInputModel } from "../../input-output-types/posts-types"
import { blogsRepository } from "../blogs/blogsRepository"

export const postsRepository = {
    getAllPosts(){
        const allPosts = db.posts

        return allPosts
    },
    
    getPostById(id: string){
        return db.posts.find(post => post.id === id)
    },

    createPost(post: PostInputModel){
        const newPost: PostDbType = {
            id: new Date().toISOString(),
            title: post.title,
            shortDescription: post.shortDescription,
            content: post.content,
            blogId: post.blogId,
            blogName: blogsRepository.getBlogById(post.blogId)!.name,
            createdAt: new Date().toISOString()
        }

        db.posts.push(newPost)
        return newPost.id
    },

    updatePost(id: string, newData: PostInputModel){
        let post = db.posts.find(post => post.id === id)

        if(post) {

            post.title = newData.title,
            post.shortDescription = newData.shortDescription,
            post.content = newData.content,
            post.blogId = newData.blogId

            return true
        } else {
            return false
        }
    },

    deletePost(id: string){
        for (let i = 0; i < db.posts.length; i++) {
            if (db.posts[i].id === id) {
                db.posts.splice(i, 1)
                return true
            }
        }
        return false
    },

}