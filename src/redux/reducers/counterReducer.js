import { createSlice } from "@reduxjs/toolkit";



 let initialState={counter:0 , userName:'ahmed'}

let counterslice = createSlice({
    name:'counter',
    initialState,
    reducers:{
    increase:(state,action)=>{state.counter +=1},
    decrease:(state,action)=>{state.counter -=1},
    }
});

export let counterReducer= counterslice.reducer;
export let {increase,decrease}= counterslice.actions;