import { combineReducers } from 'redux'
import messageReducer from './messageSlice.js'

const rootReducer = combineReducers({
    message: messageReducer
})

export default rootReducer
