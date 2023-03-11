import axios from 'axios'

const url='http://localhost:5000/blog'

export const saveNewBlog=(blogData)=>axios.post(`${url}/saveNewBlog`,blogData)

export const saveBlog=(id,blogData)=>axios.post(`${url}/saveBlog/${id}`,blogData)

export const publishBlog=(id,blogData)=>axios.post(`${url}/publishBlog/${id}`,blogData)

export const likeDislike=(id,blogData)=>axios.post(`${url}/likeDislike/${id}`,blogData)