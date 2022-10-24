import {combineReducers} from 'redux'
import student from './student'
import queries from './queries'
import items from './items'

export default combineReducers({
    student,
    queries,
    items
})