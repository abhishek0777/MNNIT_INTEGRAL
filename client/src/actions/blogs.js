import * as api from '../api/blogs.js'

export const getAllBlogs=()=>async(dispatch)=>{
    try {
        const {data}=await api.getAllBlogs()
        console.log(data)
        dispatch({type:'GET_ALL_BLOGS',payload:data})
    } catch (error) {
        console.log(error)
    }
}