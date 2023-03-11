import * as api from '../api/blog.js'

export const saveNewBlog=(blogData)=>async(dispatch)=>{
    try {
        const {data}=await api.saveNewBlog(blogData)
        dispatch({type:'NEW_BLOG',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const saveBlog=(id,blogData)=>async(dispatch)=>{
    try {
        const {data}=await api.saveBlog(id,blogData)
        dispatch({type:'SAVE_BLOG',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const publishBlog=(id,blogData)=>async(dispatch)=>{
    try {
        const {data}=await api.publishBlog(id,blogData)
        dispatch({type:'PUBLISH_BLOG',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const likeDislike=(id,blogData)=>async(dispatch)=>{
    try {
        const {data}=await api.likeDislike(id,blogData)
        dispatch({type:'LIKE_DISLIKE_BLOG',payload:data})
    } catch (error) {
        console.log(error)
    }
}