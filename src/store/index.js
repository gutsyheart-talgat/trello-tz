import {combineReducers, createStore} from 'redux'
import { projectReducer } from './projectReducer'
const rootReducer = combineReducers({
    projects:projectReducer
})

export const store = createStore(rootReducer)