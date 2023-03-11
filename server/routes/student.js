import express from 'express'
const router=express.Router()

import {getAccount,getAccounts,createAccount, updateProfile, getAccountById} from '../controllers/student.js'

router.get('/:email',getAccount)

router.get('/id/:id',getAccountById)

router.get('/',getAccounts)

router.post('/createAccount',createAccount)

router.post('/updateProfile/:id',updateProfile)

export default router