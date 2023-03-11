export default (blogs=[],action)=>{
    switch(action.type){
        case 'NEW_BLOG':
            {
                if(blogs.includes(action.payload)===false){
                    return [action.payload,...blogs]
                }else return blogs
            }
        case 'GET_ALL_BLOGS':
            return action.payload
        case 'SAVE_BLOG':
            {
                return blogs.map(blog=>(blog._id!==action.payload._id)?blog:action.payload)
            }
        case 'LIKE_DISLIKE_BLOG':
            {
                return blogs.map(blog=>(blog._id!==action.payload._id)?blog:action.payload)
            }
        default:
            return blogs
    }
}