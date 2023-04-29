import axios from 'axios'

const url='http://localhost:5000/pages'

export const pageRequest=(request)=>axios.post(`${url}/pageRequest`,request)

export const getPageRequests=()=>axios.get(`${url}/getPageRequests`);

export const deletePageRequest=(obj)=>axios.post(`${url}/deletePageRequest/${obj.id}`,obj)

export const createPage=(details)=>axios.post(`${url}/createPage`,details)

export const updateStatusOfPageRequest=(id)=>axios.post(`${url}/updateStatusOfPageRequest/${id}`)

export const getAllPages=()=>axios.get(`${url}/getAllPages`)

export const followPage=(IDs)=>axios.post(`${url}/followPage`,IDs)

export const postingAPost=(id,obj)=>axios.post(`${url}/postingApost/${id}`,obj)

export const likeAPost=(pageID,postID,userID)=>axios.post(`${url}/likeAPost/${pageID}/${postID}/${userID}`)