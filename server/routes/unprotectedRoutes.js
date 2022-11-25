import express from 'express'
const router=express.Router()

import {contactUs} from '../controllers/unprotected.js'

router.post('/contactUs',contactUs)

export default router