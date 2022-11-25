export default (students=[],action)=>{
    console.log("im here")
    switch (action.type){
        case 'GET_ACCOUNTS':
            return action.payload
        default:
            return students;
    }
}