import express from 'express'
import { createQuery,getAllQueries,postComment,upvoteComment } from '../controllers/queries.js'
const router=express.Router()

router.post('/createQuery',createQuery)

router.get('/getAllQueries',getAllQueries)

router.post('/postComment/:id',postComment)

router.post('/query/upvoteComment',upvoteComment)

export default router