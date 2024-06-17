import {Router} from 'express'
import {setDB} from '../../db/db'
import { blogsCollection, postsCollection } from '../../db/mongodb'

export const testingRouter = Router({})

testingRouter.delete('/all-data', (req, res) => {
    // setDB()
    blogsCollection.deleteMany({})
    postsCollection.deleteMany({})
    res.status(204).json({})
})