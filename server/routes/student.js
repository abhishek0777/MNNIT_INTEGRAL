import express from 'express'
const router=express.Router()

import {getAccount,createAccount, updateProfile} from '../controllers/student.js'

router.get('/:email',getAccount)

router.post('/createAccount',createAccount)

router.post('/updateProfile/:id',updateProfile)

export default router