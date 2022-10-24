export default (items=[],action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return [action.payload,...items]
        case 'GET_ALL_ITEMS':
            return action.payload
        default:
            return items
    }
}