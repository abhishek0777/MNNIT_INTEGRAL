export default (pages=[],action)=>{
    switch(action.type){
        case 'ALL_PAGES':
            return action.payload
        case 'POSTED_A_POST':
            return pages.map(page=>page._id===action.payload._id?action.payload:page)
        case 'FOLLOW_A_PAGE':
            return pages.map(page=>page._id===action.payload._id?action.payload:page)
        case 'LIKED_A_POST':
            return pages.map(page=>page._id===action.payload._id?action.payload:page)
        default:
            return pages
    }
}