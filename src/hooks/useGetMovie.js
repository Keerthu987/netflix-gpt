import { useEffect } from 'react'
import { API_OPT } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addMovies } from '../Utils/movieSlice'
const useGetMovie = () => {
    const dispatch=useDispatch();
    const favMovie=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/discover/movie?api_key=1cb05e393b076cf9afc71e2a6c5bf587', API_OPT)
  
     const json=await data.json();
     dispatch(addMovies(json.results));
    //  console.log(json.results);
    }
    useEffect(()=>{
       favMovie();
    },[])
}

export default useGetMovie
