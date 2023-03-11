import {combineReducers} from 'redux'
import student from './student'
import queries from './queries'
import items from './items'
import students from './students'
import studentProfile from './studentProfile'
import blogs from './blogs'
export default combineReducers({
    student,
    queries,
    items,
    students,
    studentProfile,
    blogs
})