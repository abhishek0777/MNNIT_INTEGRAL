import mongoose from 'mongoose'

const blogSchema=mongoose.Schema({
    author:String,
    title:String,
    categories:[String],
    content:String,
    published:{
        type:Boolean,
        default:false
    },
    likes:{
        type:[String],
        default:[]
    }
},{
    timestamps:true
})

const Blog=mongoose.model('Blog',blogSchema)

export default Blog