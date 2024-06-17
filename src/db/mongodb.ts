import { Collection, MongoClient } from "mongodb";
import { SETTINGS } from "../settings";
import { BlogDbType } from "./blog-db-type";
import { PostDbType } from "./post-db-type";
import { MongoMemoryServer } from "mongodb-memory-server";


// const client: MongoClient = new MongoClient(SETTINGS.MONGO_DB.MONGO_URI)

// const db = client.db(SETTINGS.MONGO_DB.DB_NAME)
// export const blogsCollection: Collection<BlogDbType> = db.collection(SETTINGS.MONGO_DB.BLOG_COLLECTION_NAME)
// export const postsCollection: Collection<PostDbType> = db.collection(SETTINGS.MONGO_DB.POST_COLLECTION_NAME)

let client: MongoClient
let db
export let blogsCollection: Collection<BlogDbType>
export let postsCollection: Collection<PostDbType>

export async function runDb(mongoMemoryServer = false) {
    if (mongoMemoryServer) {
        const server = await MongoMemoryServer.create()
        const uri = server.getUri()

        client = new MongoClient(uri)
        
    } else {
        client = new MongoClient(SETTINGS.MONGO_DB.MONGO_URI)
    }

    db = client.db(SETTINGS.MONGO_DB.DB_NAME)
    blogsCollection = db.collection(SETTINGS.MONGO_DB.BLOG_COLLECTION_NAME)
    
    postsCollection = db.collection(SETTINGS.MONGO_DB.POST_COLLECTION_NAME)

    try {
        
        await client.connect()
        await client.db("blogs").command({ping: 1})
        console.log('Connected successfully to mongo server');
        
    } catch(e) {
        console.log("Can't connect to db");
        await client.close()
    }
}

