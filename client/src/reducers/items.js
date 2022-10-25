export default (items=[],action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return [action.payload,...items]
        case 'GET_ALL_ITEMS':
            return action.payload
        case 'DELETE_ITEM':
            {
                return items.filter((item)=>item._id.toString()!==action.payload)
            }
        default:
            return items
    }
}