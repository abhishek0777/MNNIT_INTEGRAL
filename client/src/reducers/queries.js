export default (queries=[],action)=>{
    switch (action.type){
        case 'CREATE_QUERY':
            return [action.payload,...queries]
        case 'GET_QUERIES':
            return [...action.payload]
        case 'POST_COMMENT_ON_QUERY':
        case 'UPVOTE_ON_QUERY_COMMENT':
            {
                return queries.map(q=>
                    q._id!==action.payload._id?q:action.payload
                )
            }
        default:
            return queries;
    }
}