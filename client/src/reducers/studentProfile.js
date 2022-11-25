export default (studentProfile=[],action)=>{
    switch (action.type){
        case 'VIEW_STUDENT_PROFILE':
            return action.payload
        default:
            return studentProfile;
    }
}