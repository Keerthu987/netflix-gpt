import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";
// import { act } from "react";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        playing:null,
        trailer:null,
        popular:null,
        topRated:null
},
    reducers:{
        addMovies:(state,action)=>{
                 state.playing=action.payload
        },
        addPopular:(state,action)=>{
            state.popular=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        }
    }
})

export const{addMovies,addTrailer,addPopular,addTopRated}=movieSlice.actions;
export default movieSlice.reducer;