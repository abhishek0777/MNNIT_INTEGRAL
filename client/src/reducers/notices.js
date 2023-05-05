export default (notices=[],action)=>{
    switch(action.type){
        case 'GET_ALL_NOTICES':
            return action.payload
        case 'POST_NOTICE':
            return [action.payload,...notices]
        default:
            return notices
    }
}