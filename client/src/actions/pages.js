import * as api from '../api/pages.js'

export const pageRequest=(request)=>async(dispatch)=>{
    try {
        const {data}=await api.pageRequest(request)
    } catch (error) {
        console.log(error)
    }
}

export const getPageRequests=()=>async(dispatch)=>{
    try {
        const {data}=await api.getPageRequests()
        dispatch({type:'GET_PAGE_REQUESTS',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePageRequest=(obj)=>async(dispatch)=>{
    try {
        const {data}=await api.deletePageRequest(obj)
        dispatch({type:'DELETE_PAGE_REQUEST',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const createPage=(details)=>async(dispatch)=>{
    try {
        const {data}=await api.createPage(details)
    } catch (error) {
        console.log(error)
    }
}

export const updateStatusOfPageRequest=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.updateStatusOfPageRequest(id)
        dispatch({type:'PAGE_CREATED',payload:id})
    } catch (error) {
        console.log(error)
    }
}

export const getAllPages=()=>async(dispatch)=>{
    try {
        const {data}=await api.getAllPages()
        dispatch({type:'ALL_PAGES',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const followPage=(IDs)=>async(dispatch)=>{
    try {
        const {data}=await api.followPage(IDs)
        dispatch({type:'FOLLOW_A_PAGE',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const postingAPost=(id,obj)=>async(dispatch)=>{
    try {
        const {data}=await api.postingAPost(id,obj)
        dispatch({type:'POSTED_A_POST',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const likeAPost=(pageID,postID,userID)=>async(dispatch)=>{
    try {
        const {data}=await api.likeAPost(pageID,postID,userID)
        dispatch({type:'LIKED_A_POST',payload:data})
    } catch (error) {
        console.log(error)
    }
}