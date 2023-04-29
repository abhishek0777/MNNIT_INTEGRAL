import express from 'express'
import { createPage, deletePageRequest, followPage, getAllPages, getPageRequests, likeAPost, pageRequest, postingAPost, updateStatusOfPageRequest } from '../controllers/pages.js'
const router=express.Router()

router.post('/pageRequest',pageRequest)

router.get('/getPageRequests',getPageRequests)

router.post('/deletePageRequest/:id',deletePageRequest)

router.post('/createPage',createPage)

router.post('/updateStatusOfPageRequest/:id',updateStatusOfPageRequest)

router.get('/getAllPages',getAllPages)

router.post('/followPage',followPage)

router.post('/postingAPost/:id',postingAPost)

router.post('/likeAPost/:pageID/:postID/:userID',likeAPost)

export default router