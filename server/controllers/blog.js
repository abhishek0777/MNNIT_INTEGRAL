import Blog from "../models/Blog.js";

export const saveNewBlog=async(req,res)=>{
    const blogData=req.body
    console.log(blogData)
    const newBlog=new Blog(blogData)
    try {
        await newBlog.save()
        console.log(newBlog)
        res.status(201).json(newBlog)
    } catch (error) {
        res.status(404).json({message:error})
    } 
}

export const saveBlog=async(req,res)=>{
    const {id}=req.params
    const blogData=req.body
    try {
        const updatedBlog=await Blog.findByIdAndUpdate({_id:id},blogData,{new:true})
         res.status(201).json(updatedBlog)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const publishBlog=async(req,res)=>{
    const {id}=req.params
    const blogData=req.body
    try {
        const publishBlog=await Blog.findByIdAndUpdate({_id:id},blogData,{new:true})
        res.status(201).json(updatedBlog)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const likeDislike=async(req,res)=>{
    const {id}=req.params
    let blogData=req.body
    const blogID=req.body._id.toString()
    try {
        if(blogData.likes.includes(id)){
            let arr=blogData.likes
            let newArr=arr.filter(function(userID){
                return userID!==id
            })
            blogData.likes=newArr
        }else{
            blogData.likes.push(id)
        }
        console.log(blogData)
        const updatedBlog=await Blog.findByIdAndUpdate({_id:blogID},blogData,{new:true})
        res.status(201).json(updatedBlog)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
