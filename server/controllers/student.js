import Student from "../models/Student.js"


export const getAccount=async(req,res)=>{
    const {email}=req.params
    try {
        const data=await Student.findOne({email:email})
        res.status(201).json(data)
    } catch (error) {
        console.log(error)
    }
}

export const getAccountById=async(req,res)=>{
    const {id}=req.params
    console.log(id)
    try {
        const data=await Student.findOne({_id:id})
        res.status(201).json(data)
    } catch (error) {
        console.log(error)
    }
}

export const getAccounts=async(req,res)=>{
    try {
        const data=await Student.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}
export const createAccount=async(req,res)=>{
    const studentDetails=req.body
    
    // check if student already exist
    const isStudent=await Student.findOne({email:studentDetails.email})
    if(isStudent)return res.status(201).json(studentDetails)

    const StudentObject=new Student(studentDetails)
    try {
        await StudentObject.save()
        res.status(201).json(studentDetails)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const updateProfile=async(req,res)=>{
    const {id}=req.params
    const updatedStudent=req.body
    console.log(updatedStudent)
    try {
        const updatedProfile=await Student.findOneAndUpdate({_id:id},updatedStudent,{new:true})
        res.status(201).json(updatedProfile)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

