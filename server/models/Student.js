import mongoose from 'mongoose'

const studentSchema=mongoose.Schema({
    name:String,
    email:String,
    picture:String,
    resume:String,
    registration_number:String,
    branch:String,
    course:String,
    skills:[String],
    clubs:[String],
    // internship and placement value may change
    internship:String,
    placement:String,
    achievements:[String],
    // store objectID
    blogs:[String]   
},{
    timestamps:true
})

const Student=mongoose.model('Student',studentSchema)

export default Student