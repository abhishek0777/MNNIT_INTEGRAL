import axios from 'axios'

const url="http://localhost:5000/student"

export const getAccount=(email)=>axios.get(`${url}/${email}`)

export const getAccountById=(id)=>axios.get(`${url}/id/${id}`)

export const getAccounts=()=>axios.get(url)

export const createAccount=(studentDetails)=>axios.post(`${url}/createAccount`,studentDetails)

export const updateProfile=(id,studentDetails)=>axios.post(`${url}/updateProfile/${id}`,studentDetails)