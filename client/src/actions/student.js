import * as api from '../api/student.js'

export const getAccount=(email)=>async(dispatch)=>{
    try {
        const {data}=await api.getAccount(email)
        dispatch({type:'GET_ACCOUNT',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getAccountById=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getAccountById(id)
        dispatch({type:'BLOG_AUTHOR',payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const getAccounts=()=>async(dispatch)=>{
    try {
        const {data}=await api.getAccounts()
        dispatch({type:'GET_ACCOUNTS',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const viewProfile=(data)=>async(dispatch)=>{
    try {
        dispatch({type:'VIEW_STUDENT_PROFILE',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const createAccount=(studentDetails)=> async(dispatch)=>{
    try {
        const {data}=await api.createAccount(studentDetails)
        dispatch({type:'CREATE',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile=(id,studentDetails)=>async(dispatch)=>{
    try {
        const {data}=await api.updateProfile(id,studentDetails)
        dispatch({type:'UPDATE_PROFILE',payload:data})
    } catch (error) {
        console.log(error)
    }
}