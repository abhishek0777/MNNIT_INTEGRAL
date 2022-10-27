export default (student=[],action)=>{
    switch (action.type){
        case 'GET_ACCOUNT':
            return action.payload
        case 'SET_ACCOUNT':
            return action.payload
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return action.payload;
        case 'UPDATE_PROFILE':
            return action.payload;
        default:
            return student;
    }
}