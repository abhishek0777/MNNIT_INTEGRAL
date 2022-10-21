import * as api from '../api/index.js'

export const getAccount=(email)=>async(dispatch)=>{
    try {
        const {data}=await api.getAccount(email)
        dispatch({type:'GET_ACCOUNT',payload:data})
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