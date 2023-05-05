import Notice from '../models/Notice.js'


export const getNotices=async(req,res)=>{
    try {
        const notices=await Notice.find()
        res.status(201).json(notices)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const postNotice=async(req,res)=>{
    const notice=req.body
    try {
        const newNotice=new Notice(notice)
        await newNotice.save()
        res.status(201).json(newNotice)
    } catch (error) {
        res.status(404).json({message:error})
    }
}
