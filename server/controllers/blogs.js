import Blog from "../models/Blog.js";

export const getAllBlogs=async(req,res)=>{
    try {
        const data=await Blog.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message:error})
    }
}