import express from 'express'
import {addItem,getAllItems} from '../controllers/buyandsell.js'
const router=express.Router()

router.post('/addItem',addItem)

router.get('/getAllItems',getAllItems)

export default router