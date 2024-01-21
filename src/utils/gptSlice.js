import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'slice',
    initialState:{
        showGPTSearch: false
    },
    reducers:{
        toggleGPTSearchValue:(state,action)=>{
            state.showGPTSearch = !state.showGPTSearch
        }
    }
})

export const {toggleGPTSearchValue} = gptSlice.actions
export default gptSlice.reducer