import axios from 'axios'

const url="http://localhost:5000/queries"

export const createQuery=(queryData)=>axios.post(`${url}/createQuery`,queryData)

export const getAllQueries=()=>axios.get(`${url}/getAllQueries`)

export const postComment=(id,comment)=>axios.post(`${url}/postComment/${id}`,comment)

export const upvoteComment=(upvoteData)=>axios.post(`${url}/query/upvoteComment`,upvoteData)