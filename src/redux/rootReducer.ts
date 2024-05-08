import {combineReducers} from 'redux'
import {cartData} from './reducer'
import productReducer from './productReducer'
import usersReducer from './userReducer'


export default combineReducers({cartData,productReducer,usersReducer})