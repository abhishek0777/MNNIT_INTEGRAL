import mongoose from 'mongoose'

const NoticeSchema=mongoose.Schema({
    description:String,
    file:String
},{
    timestamps:true
})

const Notice=mongoose.model('Notice',NoticeSchema)

export default Notice