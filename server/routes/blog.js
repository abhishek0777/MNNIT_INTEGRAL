import express from 'express'
import { saveNewBlog, saveBlog, publishBlog, likeDislike } from '../controllers/blog.js'

const router=express.Router()

router.post('/saveNewBlog',saveNewBlog)

router.post('/saveBlog/:id',saveBlog)

router.post('/publishBlog/:id',publishBlog)

router.post('/likeDislike/:id',likeDislike)

export default router