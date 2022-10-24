import axios from 'axios'

const url="http://localhost:5000/student"

export const getAccount=(email)=>axios.get(`${url}/${email}`)

export const createAccount=(studentDetails)=>axios.post(`${url}/createAccount`,studentDetails)
