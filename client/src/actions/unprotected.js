import * as api from '../api/unprotected.js'

export const contactUs=async(formData)=>{
    try {
        const {data}=await api.contactUs(formData)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}