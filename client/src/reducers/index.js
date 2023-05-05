import {combineReducers} from 'redux'
import student from './student'
import queries from './queries'
import items from './items'
import students from './students'
import studentProfile from './studentProfile'
import blogs from './blogs'
import pages from './pages'
import pageRequests from './pageRequests'
import notices from './notices'
export default combineReducers({
    student,
    queries,
    items,
    students,
    studentProfile,
    blogs,
    pages,
    pageRequests,
    notices
})