// import mongoose from 'mongoose'

// const studentSchema=mongoose.Schema({
//     name:String,
//     email:String,
//     gsuite:String,
//     picture:String,
//     resume:String,
//     registration_number:String,
//     about:String,
//     branch:String,
//     course:String,
//     skills:[String],
//     clubs:[String],
//     internship:String,
//     placement:String,
//     achievements:String,
//     linkedIn:String,
//     github:String,
//     website:String,
//     // store objectID
//     blogs:[String]   
// },{
//     timestamps:true
// })

// const Student=mongoose.model('Student',studentSchema)

// export default Student


import mongoose from 'mongoose'

const studentSchema=mongoose.Schema({
    name:String,
    email:String,
    gsuite:{
        type:String,
        default:""
    },
    picture:String,
    resume:{
        type:String,
        default:""
    },
    registration_number:{
        type:String,
        default:""
    },
    about:{
        type:String,
        default:""
    },
    branch:{
        type:String,
        default:""
    },
    course:{
        type:String,
        default:""
    },
    skills:[String],
    clubs:[String],
    internship:{
        type:String,
        default:""
    },
    placement:{
        type:String,
        default:""
    },
    achievements:{
        type:String,
        default:""
    },
    linkedIn:{
        type:String,
        default:""
    },
    github:{
        type:String,
        default:""
    },
    website:String,
    // store objectID
    blogs:[String]   
},{
    timestamps:true
})

const Student=mongoose.model('Student',studentSchema)

export default Student