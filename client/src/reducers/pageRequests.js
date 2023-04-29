export default (pageRequests=[],action)=>{
    switch(action.type){
        case 'GET_PAGE_REQUESTS':
            return action.payload
        case 'DELETE_PAGE_REQUEST':
            return pageRequests.filter((request)=>request._id.toString()!==action.payload)
        case 'PAGE_CREATED':
            return pageRequests.filter((request)=>request._id.toString()!==action.payload)
        default:
            return pageRequests
    }
}

