import Query from "../models/Query.js";

export const createQuery=async(req,res)=>{
    const queryData=req.body
    const newQuery=new Query(queryData)
    try {
        await newQuery.save()
        res.status(201).json(newQuery)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const getAllQueries=async(req,res)=>{
    try {
        const data=await Query.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const postComment=async(req,res)=>{
    const date=new Date()
    const {id}=req.params
    const comment={...req.body,createdAt:date}
    let query=await Query.findOne({_id:id})
    try {
        query.comments.unshift(comment)
        const updatedQuery=await Query.findOneAndUpdate({_id:id},query,{new:true})
        console.log(updatedQuery)
        res.status(201).json(updatedQuery)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const upvoteComment=async(req,res)=>{
    const {queryID,commentID}=req.body
    let query=await Query.findOne({_id:queryID})
    for(let i=0;i<query.comments.length;i++)  {
        if(query.comments[i]._id.toString()===commentID){
            query.comments[i].upvote+=1
        }
    }
    try {
        const updatedQuery=await Query.findOneAndUpdate({_id:queryID},query,{new:true})
        res.status(201).json(updatedQuery)
    } catch (error) {
        res.status(404).json({message:error})
    }
}


