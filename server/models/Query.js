import mongoose from 'mongoose'

const querySchema=mongoose.Schema({
    title:String,
    details:String,
    picture:String,
    author:String,
    comments:[{
        author:String,
        comment:String,
        upvote:{
            type:Number,
            default:0
        },
        createdAt:Date
    }]},{
    timestamps:true
})

const Query=mongoose.model('Query',querySchema)

export default Query