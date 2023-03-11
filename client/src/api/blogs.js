import axios from 'axios'

const url='http://localhost:5000/blogs'

export const getAllBlogs=()=>axios.get(`${url}/getAllBlogs`)