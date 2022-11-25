import axios from 'axios'

const url="http://localhost:5000/unprotected"

export const contactUs=(formData)=>axios.post(`${url}/contactUs`,formData)