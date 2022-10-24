import * as api from '../api/queries.js'

export const createQuery=(queryData)=>async(dispatch)=>{
    try {
        const {data}=await api.createQuery(queryData)
        dispatch({type:'CREATE_QUERY',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getAllQueries=()=>async(dispatch)=>{
    try {
        const {data}=await api.getAllQueries()
        dispatch({type:'GET_QUERIES',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const postComment=(id,comment)=>async(dispatch)=>{
    try {

        const {data}=await api.postComment(id,comment)
        dispatch({type:'POST_COMMENT_ON_QUERY',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const upvoteComment=(upvoteData)=>async(dispatch)=>{
    try{
        const {data}=await api.upvoteComment(upvoteData)
        dispatch({type:'UPVOTE_ON_QUERY_COMMENT',payload:data})
    } catch (error){
        console.log(error)
    }
}