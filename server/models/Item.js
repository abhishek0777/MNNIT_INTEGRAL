import mongoose from 'mongoose'

const itemSchema=mongoose.Schema({
    author:String,
    name:String,
    description:String,
    tag:String,
    price:String,
    contact:String,
    picture:String
},{
    timestamps:true
})

const Item=mongoose.model('Item',itemSchema)

export default Item