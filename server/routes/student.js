import express from 'express'
const router=express.Router()

import {getAccount,getAccounts,createAccount, updateProfile} from '../controllers/student.js'

router.get('/:email',getAccount)

router.get('/',getAccounts)

router.post('/createAccount',createAccount)

router.post('/updateProfile/:id',updateProfile)

export default router