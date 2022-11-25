import ContactUs from "../models/ContactUs.js";

export const contactUs=async (req,res)=>{
    try {
        const formData=new ContactUs(req.body)
        await formData.save()
        res.status(201).json({message:"Message successfully sent to admin team."})
    } catch (error) {
        res.status(404).json({message:"Message failure"})
    }
}