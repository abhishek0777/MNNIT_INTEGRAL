import express from 'express'
const router=express.Router()

import {getAccount,createAccount} from '../controllers/student.js'

router.get('/:email',getAccount)

router.post('/createAccount',createAccount)

export default router