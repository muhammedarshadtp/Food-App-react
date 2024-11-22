import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItems:(state,action)=>{
            state.push(action.payload)
        },
        removeItems:(state)=>{
            state.pop()
        },
        clearItems:(state)=>{
            state.length=0
        }
    }
})

export const {addItems,removeItems,clearItems}=cartSlice.actions

export default cartSlice.reducer;