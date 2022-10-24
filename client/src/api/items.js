import axios from 'axios'

const url='http://localhost:5000/buyandsell'

export const addItem=(itemData)=>axios.post(`${url}/addItem`,itemData)

export const getAllItems=()=>axios.get(`${url}/getAllItems`)