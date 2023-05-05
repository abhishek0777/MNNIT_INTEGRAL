import express from 'express'
import { postNotice } from '../controllers/notices.js'

const router=express.Router()

router.post('/postNotice',postNotice)

export default router