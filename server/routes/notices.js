import express from 'express'
import { getNotices, postNotice } from '../controllers/notices.js'

const router=express.Router()

router.post('/postNotice',postNotice)

router.get('/getNotices',getNotices)

export default router