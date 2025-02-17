import { useEffect } from 'react'
import { API_OPT } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import {  addTopRated } from '../Utils/movieSlice'
const useTopRated = () => {
    const dispatch=useDispatch();
    const topRated=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=1cb05e393b076cf9afc71e2a6c5bf587', API_OPT)
  
     const json=await data.json();
     dispatch(addTopRated(json.results));
    //  console.log(json.results);
    }
    useEffect(()=>{
       topRated();
    },[])
}

export default useTopRated
