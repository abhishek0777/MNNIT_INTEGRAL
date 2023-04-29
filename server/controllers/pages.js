import PageRequest from "../models/PageRequest.js";
import Page from "../models/Page.js";

export const pageRequest=async(req,res)=>{
    const request=req.body;
    const newPageRequest=new PageRequest(request)
    try {
        await newPageRequest.save()
        res.status(201).json(newPageRequest)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const getPageRequests=async(req,res)=>{
    try {
        const requests=await PageRequest.find({isCreated:false})
        res.status(201).json(requests)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const deletePageRequest=async(req,res)=>{
    const {id}=req.params
    try {
        
        let request=await PageRequest.findOne({_id:id})
        request.pending=false;
        request.reasonToReject=req.body.reason
        let updatedRequest=await PageRequest.findOneAndUpdate({_id:id},request,{new:true})
        res.status(201).json(id)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const createPage=async(req,res)=>{
    const details=req.body
    try {
        const page=new Page({
            name:details.pageName,
            description:details.description,
            admin:details.pageAdminID,
            followers:[details.pageAdminID],
            image:details.image,
            posts:[]
        })
        await page.save()
        res.status(201).json(page)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const updateStatusOfPageRequest=async(req,res)=>{
    const {id}=req.params
    try {
        let request=await PageRequest.findOne({_id:id})
        request.isCreated=true
        const updatedRequest=await PageRequest.findOneAndUpdate({_id:id},request,{new:true})
        res.status(201).json(updatedRequest)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const getAllPages=async(req,res)=>{
    try {
        const pages=await Page.find()
        res.status(201).json(pages)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const followPage=async(req,res)=>{
    try {
        const IDs=req.body
        let page=await Page.findOne({_id:IDs.pageID})
        page.followers.push(IDs.studentID)
        const updatedPage=await Page.findByIdAndUpdate({_id:IDs.pageID},page,{new:true})
        res.status(201).json(updatedPage)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const postingAPost=async(req,res)=>{
    try {
        const {id}=req.params
        const post=req.body
        let page=await Page.findOne({_id:id})
        page.posts.unshift(post)
        const updatedPage=await Page.findOneAndUpdate({_id:id},page,{new:true})
        res.status(201).json(updatedPage)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const likeAPost=async(req,res)=>{
    try {
        const {pageID,postID,userID}=req.params
        let page=await Page.findOne({_id:pageID})
        let posts=page.posts
        let post
        for(let i=0;i<posts.length;i++){
            if(posts[i]._id.toString()===postID){
                if(posts[i].likes.includes(userID)===false){posts[i].likes.push(userID);}
                else{
                    posts[i].likes.splice(posts[i].likes.indexOf(userID),1)
                }
                post=posts[i]
            }
        }
        page.posts=posts
        const updatedPage=await Page.findByIdAndUpdate({_id:pageID},page,{new:true})
        res.status(201).json(updatedPage)
    } catch (error) {
        res.status(404).json({message:error})
    }
}