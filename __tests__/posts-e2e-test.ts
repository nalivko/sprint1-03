import { req } from './helpers/test-helpers'
import { db, setDB } from '../src/db/db'
import { SETTINGS } from '../src/settings'
import { codedAuth, createString, dataset1, dataset2 } from './helpers/datasets'
import { PostInputModel } from '../src/input-output-types/posts-types'
import { BlogInputModel } from "../src/input-output-types/blogs-types";

describe('/posts', () => {

    beforeAll(async () => {
        // setDB()
    })

    it('test', () => {
        expect(1).toEqual(1)
    })

    // it('should created', async () => {
    //     setDB(dataset1)
    //     const newPost: PostInputModel = {
    //         title: 't1',
    //         shortDescription: 's1',
    //         content: 'c1',
    //         blogId: dataset1.blogs[0].id,
    //     }

    //     const res = await req
    //         .post(SETTINGS.PATH.POSTS)
    //         .set({ 'Authorization': 'Basic ' + codedAuth })
    //         .send(newPost) // отправка данных
    //         .expect(201)

    //     // console.log(res.body)

    //     expect(res.body.title).toEqual(newPost.title)
    //     expect(res.body.shortDescription).toEqual(newPost.shortDescription)
    //     expect(res.body.content).toEqual(newPost.content)
    //     expect(res.body.blogId).toEqual(newPost.blogId)
    //     expect(res.body.blogName).toEqual(dataset1.blogs[0].name)
    //     expect(typeof res.body.id).toEqual('string')

    //     expect(res.body).toEqual(db.posts[0])
    // })
})