import express from 'express'
import { getAllBlogs } from '../controllers/blogs.js'
const router=express.Router()

router.get('/getAllBlogs',getAllBlogs)

export default router