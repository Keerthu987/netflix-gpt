import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";
// import { act } from "react";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        playing:null,
        trailer:null
},
    reducers:{
        addMovies:(state,action)=>{
                 state.playing=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        }
    }
})

export const{addMovies,addTrailer}=movieSlice.actions;
export default movieSlice.reducer;