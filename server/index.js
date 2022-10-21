import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import studentRoutes from './routes/student.js'
const app=express()

dotenv.config()
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Welcome dear")
})

app.use('/student',studentRoutes);


const PORT=process.env.PORT||5000
mongoose.connect(process.env.MONGO_DB_CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is listening at PORT=${PORT}`)
    })
})
.catch(err=>console.log(err))

