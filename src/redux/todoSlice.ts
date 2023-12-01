import { ITODO } from '@models'
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    data:[] as ITODO[],
    countJob:0,
}
const todoSlice = createSlice({
    name:"todoSlice",
    initialState,
    reducers:{
        setJob:(state,action)=>{
            state.data.push(action.payload);
            state.countJob +=1
        },
        setDoneJob:(state,action)=>{
            state.data.map((item)=>{
                if(item.id===action.payload){
                    item.isDone = true;
                }
            })
        }
    }
})
export const {setJob,setDoneJob} = todoSlice.actions
export default todoSlice.reducer