import * as api from '../api/items.js'

export const addItem=(itemData)=>async(dispatch)=>{
    try {
        const {data}=await api.addItem(itemData)
        dispatch({type:'ADD_ITEM',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getAllItems=()=>async(dispatch)=>{
    try {
        const {data}=await api.getAllItems()
        dispatch({type:'GET_ALL_ITEMS',payload:data})
    } catch (error) {
        console.log(error)
    }
}