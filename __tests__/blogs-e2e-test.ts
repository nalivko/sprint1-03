import { req } from './helpers/test-helpers'
// import { db, setDB } from '../src/db/db'
import { SETTINGS } from '../src/settings'
import { BlogInputModel } from '../src/input-output-types/blogs-types'
import { blog, codedAuth, createString, dataset1 } from './helpers/datasets'
import { runDb, blogsCollection, postsCollection } from '../src/db/mongodb'
import exp from 'constants'

jest.setTimeout(8000)

describe('/blogs', () => {

    beforeAll(async () => {
        await runDb(true)
        await blogsCollection.drop()
        // postsCollection.drop()
    })

    afterAll(async () => {
        // if (connection) {
        //     await connection.close()
        // }
        // if (server) {
        //     await server.stop()
        // }
    }),

        it('should return 200 and empty array', async () => {

            const res = await req
                .get(SETTINGS.PATH.BLOGS)
                .expect(200)
        })

    it('should create', async () => {

        await req
            .post(SETTINGS.PATH.BLOGS)
            .set({ 'Authorization': 'Basic ' + codedAuth })
            .send(blog)
            .expect(201)

        const res = await req
            .get(SETTINGS.PATH.BLOGS)
            .expect(200)

        expect(res.body.length).toEqual(1)
        expect(res.body.name).toEqual(blog.name)
        expect(res.body.description).toEqual(blog.description)
        expect(res.body.websiteUrl).toEqual(blog.websiteUrl)

    })

    it('should find blog by id', async () => {

    })

    // it('should not create', async () => {
    //     // setDB()
    //     // const newBlog: BlogInputModel = {
    //     //     name: 'n1',
    //     //     description: 'd1',
    //     //     websiteUrl: 'http://some.com',
    //     // }

    //     // const res = await req
    //     //     .post(SETTINGS.PATH.BLOGS)
    //     //     .set({ 'Authorization': 'Basic ' + codedAuth })
    //     //     .send(newBlog) // отправка данных
    //     //     .expect(201)

    //     // // console.log(res.body)

    //     // expect(res.body.name).toEqual(newBlog.name)
    //     // expect(res.body.description).toEqual(newBlog.description)
    //     // expect(res.body.websiteUrl).toEqual(newBlog.websiteUrl)
    //     // expect(typeof res.body.id).toEqual('string')

    //     // expect(res.body).toEqual(db.blogs[0])
    // })


})