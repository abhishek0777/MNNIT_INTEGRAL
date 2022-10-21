import Student from "../models/Student.js"


export const getAccount=async(req,res)=>{
    const {email}=req.params
    try {
        console.log(email)
        const data=await Student.findOne({email:email})
        res.status(201).json(data)
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