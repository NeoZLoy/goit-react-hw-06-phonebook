import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        name: ""
}
const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers:{
        nameFilter(state, action){
           state.name = action.payload
        },
    }
})


export const {nameFilter} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;