import { IUSER } from '@models'
import { navigate, reset } from '@navigations';
import {createAsyncThunk,createSlice, nanoid} from '@reduxjs/toolkit'
import { helper } from '@utils';

const initialState = {
    data:[] as  IUSER[],
    user:{} || undefined,
    countUser:0,
}
const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        register:(state,action)=>{
            state.data.push(action.payload);
            state.countUser+=1;
        },
        saveUser:(state,action)=>{
            state.user = action.payload;
        },
        logout:(state)=>{
            state.user=undefined
            reset([{name: 'login'}]);
        }
    },

})
export const {register,saveUser,logout} = userSlice.actions
export default userSlice.reducer