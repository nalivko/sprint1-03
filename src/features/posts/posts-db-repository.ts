import { PostDbType } from "../../db/post-db-type"
import { PostInputModel, PostViewModel } from "../../input-output-types/posts-types"
import { blogsRepository } from "../blogs/blogs-db-repository"
import { postsCollection } from "../../db/mongodb"

export const postsRepository = {
    getAllPosts(): Promise<PostDbType[]> {
        const allPosts = postsCollection.find({}).toArray()

        return allPosts
    },
    
    async getPostById(id: string): Promise<PostDbType | null> {
        const post = await postsCollection.findOne({id: id})

        return post ? post : null
    },

    async createPost(post: PostInputModel): Promise<PostViewModel>{
        const blog = await blogsRepository.getBlogById(post.blogId)
        const newPost: PostDbType = {
            id: new Date().toISOString(),
            title: post.title,
            shortDescription: post.shortDescription,
            content: post.content,
            blogId: post.blogId,
            blogName: blog!.name,
            createdAt: new Date().toISOString()
        }

        await postsCollection.insertOne(newPost)
        return newPost
    },

    async updatePost(id: string, newData: PostInputModel): Promise<boolean> {
        
        const result = await postsCollection.updateOne({id: id}, {$set: {
            title: newData.title,
            shortDescription: newData.shortDescription,
            content: newData.content,
            blogId: newData.blogId
        }})

        return result.matchedCount === 1
    },

    async deletePost(id: string): Promise<boolean> {
        const result = await postsCollection.deleteOne({id: id})

        return result.deletedCount === 1
    },

}