import mongoose from 'mongoose'

const PageSchema=mongoose.Schema({
    name:String,
    description:String,
    admin:String,
    followers:[String],
    image:String,
    posts:[{
        content:String,
        images:[String],
        likes:[String],
        username:String,
        userimage:String,
        date:Date
    },{
        timestamps:true
    }]
},{
    timestamps:true
})

const Page=mongoose.model('Page',PageSchema)

export default Page