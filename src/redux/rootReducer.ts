import {combineReducers} from '@reduxjs/toolkit';
import todoSlice from './todoSlice'
import userSlice from './userSlice'
const rootReducer = combineReducers({
    todoSlice,
    userSlice
});
export default rootReducer