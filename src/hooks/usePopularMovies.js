import { useEffect } from 'react'
import { API_OPT } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import {  addPopular } from '../Utils/movieSlice'
const usePopularMovies = () => {
    const dispatch=useDispatch();
    const popularMovie=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPT)
  
     const json=await data.json();
     dispatch(addPopular(json.results));
    //  console.log(json.results);
    }
    useEffect(()=>{
       popularMovie();
    },[])
}

export default usePopularMovies