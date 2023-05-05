import * as api from '../api/notices.js'


export const getNotices=()=>async(dispatch)=>{
    try {
        const {data}=await api.getNotices()
        dispatch({type:'GET_ALL_NOTICES',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const postNotice=(notice)=>async(dispatch)=>{
    try {
        const {data}=await api.postNotice(notice)
        dispatch({type:'POST_NOTICE',payload:data})
    } catch (error) {
        console.log(error)
    }
}
