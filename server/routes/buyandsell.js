import express from 'express'
import {addItem,getAllItems,deleteItem} from '../controllers/buyandsell.js'
const router=express.Router()

router.post('/addItem',addItem)

router.get('/getAllItems',getAllItems)

router.delete('/deleteItem/:id',deleteItem)

export default router