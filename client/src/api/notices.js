import axios from 'axios'

const url='http://localhost:5000/notices'

export const postNotice=(notice)=>axios.post(`${url}/postNotice`,notice)

export const getNotices=()=>axios.get(`${url}/getNotices`)