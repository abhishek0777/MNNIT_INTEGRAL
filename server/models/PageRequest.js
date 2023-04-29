import mongoose from "mongoose";

const pageRequestSchema=mongoose.Schema({
    pageName:String,
    description:String,
    why:String,
    contact:String,
    isCreated:Boolean,
    pending:{
        type:Boolean,
        default:true
    },
    reasonToReject:String,
    pageAdminID:String,
    pageAdminName:String,
    image:String
},{
    timestamps:true
})

const PageRequest=mongoose.model('PageRequest',pageRequestSchema)

export default PageRequest